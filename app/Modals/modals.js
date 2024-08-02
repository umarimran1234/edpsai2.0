import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:[true , 'please provide']
    },
    email:{
        type:String,
        required:[true , 'please provide email']

    },
    password:{
     type:String,
     required:[true , 'please enter password'],
     minlength:[8, 'password must be minimum 8 correctors']
    }

} , {
    timestamps:true
} )

const userModal = mongoose.models.User || mongoose.model('User', UserSchema);

export default  userModal   