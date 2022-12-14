require('dotenv').config()
const S3 = require('aws-sdk/clients/s3')
const fs = require('fs')

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

// uploads a file to s3
function uploadFile(file){
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    }

    return s3.upload(uploadParams).promise()
}
exports.uploadFile = uploadFile




// dowloads a file from s3
function getFileStream(fileKey){
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    }
    return s3.getObject(downloadParams).createReadStream()
}
exports.getFileStream = getFileStream


// Delete File from S3
const deleteFile = async (fileKey) =>{
    console.log("DeleteKey", fileKey)
    const deleteParams = {
        Key: fileKey,
        Bucket: bucketName
    }
    await s3.deleteObject(deleteParams).promise()
}
exports.deleteFile = deleteFile



// const deleteImg = async (path) => {
//     const img = await request(`DELETE FROM skill_img WHERE path = "${path}"`)
//     const imagenes = await request (`SELECT * FROM skill_img`)

//     return {
//         imagenes: [...imagenes],
//         deleted: img.affectedRows ? true : false,
//         message: "Imagen eliminada satisfactoriamente"
//     }
// }