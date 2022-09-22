//importing express module
const express = require('express');
const userRouter = require('./routers/userRouter');
const videoRouter = require('./routers/videoRouter');
const productRouter = require('./routers/productRouter');
const cors=require('cors');
//initializing express app
const app=express();

const port=4000;

app.use(express.json());
app.use(cors({
    origin:['http://localhost:3000']
}))

app.use('/user',userRouter);
app.use('/video',videoRouter);
app.use('/product',productRouter);


   // route or emdpoint 
   app.get('/',(req,res)=>{
    res.send('response from express');
   })
   app.get('/home',(req,res)=>{
    res.send('home m aagy');
   })
//starting server
app.listen(port,()=>{
    console.log('express server started...');
});