const express=require("express")

const app=express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.body)
    next()
})

app.use("/start",(req,res)=>{
    console.log("Successfully tested")
    res.json({"status":"ok"})
})

app.listen(8080,()=>{
    console.log("started listening at port 8000");
})
