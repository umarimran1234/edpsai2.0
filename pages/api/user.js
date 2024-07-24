
 import userModal from '../../app/Modals/modals.js';
 import {connectMongodb} from '../../lib/Mongodbconnect/config.js'
export default async function handler(req , res){
 if(req.method !== "POST"){
     res.status(405).send({msg:'Only post requist are allowed'})
    }
 const { name , email , password } = req.body
 try{
     await connectMongodb();
const    existEMail = await userModal.findOne({email})
if(existEMail){
    return res.status(400).send({msg:'User already exists'});
}
const newUser = await   userModal.create({ name,email,password })
     
    res.status(201).send(newUser);
  
}   catch(err){
    console.log(err)
    res.status(400).send({ err, msg: 'somthing is wrong'});

}

}
