const e = require('express')
const express = require('express')
const app=express()
const PORT =4000

const customMiddleware =(req,res,next)=>{
    console.log("Middleware Executed!")
    next()

}



app.get('/',(req,res)=>{
    console.log("This is Home")
    res.send("hello world")
})


app.get('/about',customMiddleware,(req,res)=>{
    console.log("This is About")
    res.send("hello world about")
})

app.listen(PORT,()=>{
    console.log("Server is running on",PORT);
})