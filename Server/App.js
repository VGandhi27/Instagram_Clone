const express = require('express')
const app=express()
const PORT =4000

app.get('/home',(req,res)=>{
    res.send("hello world")
})

app.listen(PORT,()=>{
    console.log("Server is running on",PORT);
})