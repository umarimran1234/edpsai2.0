import cardSchema from "../../app/Modals/problemaddSchma";
import { connectMongodb } from "../../lib/Mongodbconnect/config";
import { finduserbyemail } from "./userUtilitis";

export default async function handlerAccept(req, res) {
  await connectMongodb();
  
  if (req.method !== "POST") {
    return res.status(405).send({ msg: 'Only POST requests are allowed' });
  }

  const { projectId, token } = req.query;

  try {
    const card = await cardSchema.findById(projectId);
    if (!card) {
      return res.status(404).send({ msg: 'Project not found' });
    }

    const invitation = card.invitation.find(inv => inv.token === token);
    if (!invitation || new Date() > invitation.tokenExpireAT) {
      return res.status(400).send({ msg: 'Invalid or expired token' });
    }

    const user = await finduserbyemail(invitation.email);
    if (user) {
      if (!card.Contributers.includes(user.email)) {
        card.Contributers.push(user.email);
        invitation.accepted = true; // Mark the invitation as accepted
        await card.save();
      }
    } else {
    
        return res.status(404).send({ msg: 'User not found' });
    
    }

    res.status(200).send({ msg: 'Invitation accepted' });
  } catch (err) {
    console.error('Error:', err);
    res.status(400).json({ error: err.message });
  }
}
