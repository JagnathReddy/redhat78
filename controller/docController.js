import asyncHandler from "express-async-handler";
const storeDocument=asyncHandler(async(req,res)=>{
    const {documentBase64,key}=req.body;
    var params = {
        Body: documentBase64, 
        Bucket: "", 
        Key: key, 
    };
    await s3.putObject(params, function(err, data) {
        if (err) {
            console.log(err, err.stack); 
            res.status(401).json({status:"error",error:err,message:err.stack})
        }          // an error occurred
        else{     
            console.log(data); 
            res.status(200).json({status:"success",data})
        }          // successful response
    });
})