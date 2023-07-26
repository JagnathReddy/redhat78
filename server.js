import express from "express"
import documentRouter from "./routes/documentRouter"

const app=express()

app.use(express.json())



app.use("/document",documentRouter)

let port=process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080

app.listen(port,()=>{
    console.log("started listening at port "+port);
})
