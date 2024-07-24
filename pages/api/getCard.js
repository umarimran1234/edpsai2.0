import { connectMongodb } from "../../lib/Mongodbconnect/config";
import cardSchema from "../../app/Modals/problemaddSchma";

export default async function getCards (req,res) {

    await connectMongodb()
      const {userId}  = req.query
   
      console.log(req.query);
      try{
    const cards =  await cardSchema.find({userId})
    res.status(200).json(cards) 
}catch(err){
    console.log(err);
    res.status(500).json({massage:"error fetching data"})
}
}

    