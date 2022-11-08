const express = require('express')
const app=express()
const mongoose =require('mongoose')
const PORT =4000
const {MONGOURI}=require("./Key")







mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})
mongoose.connection.on('error',(err)=>{
    console.log("error connecting",err)
})

require('./models/User')
require('./models/Post')


app.use(express.json())
app.use(require('./routes/Auth'))
app.use(require('./routes/Post'))
app.use(require('./routes/User'))


app.listen(PORT,()=>{
    console.log("Server is running on",PORT);
})