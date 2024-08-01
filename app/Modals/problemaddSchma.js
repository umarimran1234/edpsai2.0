import mongoose, { Schema } from "mongoose";

const CardSchema = new mongoose.Schema({
    userId:{type: mongoose.Schema.Types.ObjectId , required:true},
    ProjectName:{ type: String , required:true},
    DescribProblem:{type:String, required:true},
   
    Contributers:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
    invitationToken:[
        {
        email:{type:String},
        token:{type:String},
        tokenExpireAT:{type:Date},
    }
] ,
 crunnentStep:{type:Number,default:0},
 steps:{
    type:Map,
    of:Schema.Types.Mixed
 }
}, 
{timestamps:true})

const cardSchema =  mongoose.models.Card || mongoose.model('Card', CardSchema) 
export default cardSchema 