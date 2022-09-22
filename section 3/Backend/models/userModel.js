const {Schema,model} =require('../connection');
const myschema=new Schema({
        username: String,
        password:String,
        email:String,
        age:Number
});
module.exports=model('users',myschema);