
const mongoose=require('mongoose');


const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        default:0
    },
    category:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'category',
        required:true
    },
    producttype:{
        type:String,
        required:true
    },
    features:{
        type:mongoose.Schema.Types.Mixed,
        required:true
    }

})



productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals: true,
});

exports.product=mongoose.model('product',productSchema,'product');

