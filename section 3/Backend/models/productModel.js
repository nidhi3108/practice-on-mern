const {Schema,model} =require('../connection');
const myschema=new Schema({
        productname: String,
        quantity:String,
        size:String,
        paymentmethod:Number
});
module.exports=model('product',myschema);