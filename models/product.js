const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'product name must be provided'],
    },
    price:{
        type:Number,
        required:[true,'product price must be provided'], 
    },
    featured:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        deafault:4.5,
    },
    createdAt:{
        type:Date,
        dafault: Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:['ikea','liddy','caressa','marcos'],
            mesaage: '{VALUE} is not supported',
        },
    },
})

module.exports= mongoose.model('Product',productSchema)