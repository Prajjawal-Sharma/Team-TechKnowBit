const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send('Hello');
})
app.listen(5000||process.env.port,()=>{
    console.log('Server is active....')
})