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

let port=process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080

app.listen(port,()=>{
    console.log("started listening at port "+port);
})
