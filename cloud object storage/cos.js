const S3 =require("ibm-cos-sdk/clients/s3.js");


var config = {
    endpoint: 's3.jp-tok.cloud-object-storage.appdomain.cloud',
    apiKeyId: '0xvvyEIWYXf8rceC3khbI4sD_tVyAp-7qqnZ8czJIlHp',
    serviceInstanceId: 'crn:v1:bluemix:public:cloud-object-storage:global:a/dbad7cc0c6a642f892afdcb81fac6df4:3bf9d86f-811f-480b-af51-ab1401c5e643::',
    signatureVersion: 'iam',
    region:"jp-tok"
};

var cos = new S3(config);

module.exports=cos