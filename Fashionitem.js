const mongoose=require('mongoose')


const Fashionschema=new mongoose.Schema(
    {  
        name: String,                      
        size: String,         
        color: String,        
        price: Number,        
        occasion: String,
        image:String,     
        rating: Number       
     
    }
)

const Fashionitem=mongoose.model("fashion_data",Fashionschema);
module.exports=Fashionitem