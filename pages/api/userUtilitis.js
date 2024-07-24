import userModal from "../../app/Modals/modals";

export  const finduserbyemail = async (email)=>{
    const user = await userModal.findOne({email})
    return user ? user._id : null

}