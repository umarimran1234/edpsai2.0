import userModal from "../../app/Modals/modals";

export  const finduserbyemail = async (email)=>{
   return  await userModal.findOne({email: email})
    

}