import { connectMongodb } from "../../lib/Mongodbconnect/config";
import cardSchema from "../../app/Modals/problemaddSchma";
    

connectMongodb();

export default async function handler(req,res){
    if(req.method === 'GET'){
        const {cardId} = req.query;

        try{
            const card = cardSchema.findById(cardId);
            if(!card){
                return res.status(404).json({messege:'Card not found'})
            }
            res.status(200).json({crunnentStep:card.crunnentStep, steps: card.steps})
        } catch(err){
            console.log("Error fetching data" , err);
                  res.status(500).json({ message: "Error fetching progress" });
        }

    } else{
        res.status(405).json({ message: 'Method not allowed' });
    }
}