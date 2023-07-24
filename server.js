const express = require("express")

const app =express()

app.use("/",(req,res)=>{
    console.log("hit");
    res.json({"hello":"ok"});
})

app.listen(3000,()=>{console.log("started")})