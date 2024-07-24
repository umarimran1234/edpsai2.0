import { connectMongodb } from "../../../lib/Mongodbconnect/config";
import userModal from "../../../app/Modals/modals";


export default async function handler(req, res) {
const  { id:userId}   = req.query;


  await connectMongodb();

  try {
    const user = await userModal.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    } 
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}
