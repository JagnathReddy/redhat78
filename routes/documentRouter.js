const express = require("express")
const getDocument =require("../controller/docController.js")


const  documentRouter=express.Router();

documentRouter.get("/key/:keyId",getDocument.getDocument).post("/",getDocument.storeDocument)

module.exports=documentRouter