const path = require('path');
const express = require('express');
const fs=require('fs')
const cos = require("../cloud object storage/cos.js");
const PDFDocument = require('pdfkit');
module.exports.storeDocument=(req,res)=>{
    const {documentBase64,key}=req.body;
        console.log(documentBase64);
        console.log(key)
            var params = {
                Body: documentBase64.toString(),
                Bucket: "cloud-object-storage-cos-standard-wwf", 
                Key: key
            };
            cos.putObject(params, function(err, data) {
                if (err) {
                    console.log(err, err.stack); 
                    res.status(401).json({status:"error",error:err,message:err.stack})
                }          // an error occurred
                else{     
                    console.log(data); 
                    res.status(200).json({status:"success",data})
                }          // successful response
            });
            
}





module.exports.getDocument=(req,res)=>{
    cos.getObject({Key:req.params.keyId,Bucket:"cloud-object-storage-cos-standard-wwf"})
    .on('complete',(response)=>{
        // Get the base64 encoded PDF from your server
        pdfBase64="non"
        if(response.data.Body)
        var pdfBase64 = response.data.Body?.toString();
        
        // Set the content type and send the base64 encoded PDF as the response body
        res.setHeader('Content-Type', 'application/pdf');
        res.send(Buffer.from(pdfBase64, 'base64'));
    }).on('error',(error)=>{
        res.status(404).json(error)
    })
    .send()
}


