const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const {uri} = require("./keys/key")

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',()=>{
    console.log("conneted to mongo yeahh")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})
require('./model/user.js')
require('./model/product.js')
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/product'))



app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})
