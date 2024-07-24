import { connectMongodb } from "../../lib/Mongodbconnect/config";
import cardSchema from "../../app/Modals/problemaddSchma";


export default async function hendler(req,res ){
    if(req.method !== 'GET'){
        res.status(405).send({msg:'only get request are not allowed'})
       
    }
await connectMongodb();
const {userId} = req.query;
try{
const card = await cardSchema.find({userId})
const contributors = card.reduce((acc,card) =>{
    acc.push(...card.Contributers);
    return acc;
}, [] )  
const uniqueContributers = [...new Set(contributors)]
res.status(200).json(uniqueContributers);
} catch(error){
     res.status(500).json({ message: 'Error fetching contributors', error });
}

}