const express =require("express")
const documentRouter =require("./routes/documentRouter.js")
const bodyParser = require("body-parser")
const cors=require("cors")
const { getDocument } = require("./controller/docController.js")
const app=express()

//app.use(cors({origin:"*"}))


app.use(bodyParser.json({limit:"50mb"}))
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use("/",(req,res)=>{
    res.json({status:"ok"})
})

app.use(express.static('example'))
app.use("/document/",documentRouter)
let port=8080

app.listen(port,()=>{
    console.log("started listening at port "+port);
})
