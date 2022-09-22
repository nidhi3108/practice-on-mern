const express = require('express');
const router=express.Router();
router.get('/add',(req,res)=>{
    res.send('response from video Router');
})


//exporting
module.exports=router;