import cardSchema from "../../app/Modals/problemaddSchma";
import { connectMongodb } from "../../lib/Mongodbconnect/config";
import { finduserbyemail } from "./userUtilitis";

export default async function handlerAccept (req,res){
    await connectMongodb();
    if(req.method !== "POST"){
        return res.status(405).send({ msg: 'Only GET requests are allowed' });
    }

    const {projectId , token} =  req.query;

    try{
        const card = await cardSchema.findById(projectId);
        if(!card){
            return res.status(404).send({msg:'Project not found'})
        } 

        const invitation = card.invitationToken.find(inv => inv.token === token);
     if(invitation || new Date() > invitation.tokenExpireAT){
        return res.status(400).send({msg:'Invalid or expire token'})
     }
   
      const  userId = await finduserbyemail(invitation.email);
      if(userId){
        if(!card.Contributers.includes(userId)){
            card.Contributers.push(userId);
            await card.save()
        }
      }
 res.status(200).send({msg:'Invalid accepted'});
    } catch(error){
res.status(400).json({error:err.massage})
}
} 
