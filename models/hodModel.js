const mongoose=require("mongoose");





const hodSchema=new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
      
        required:true
    },
    password:{
      type:String,
      required:true,
      select:false
    },
    
    collegeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'College',
            
    },
    active:{
        type:Boolean,
        default:false
    },
    
    department:{
        type:String,
      
        required:true
    },
    role:{
        type:String,
        default:"hod"
    }
    
},{
    timestamps:true
})




const hodModel=mongoose.model("Hod",hodSchema);

module.exports=hodModel;
