//video upload service

import AWS from 'aws-sdk'


const s3 = new AWS.S3({
    accessKeyId: "Enter later",
    secretAccessKey: "Enter later",
    region: "Enter later"
})


export const uploadToS3 = async (file: File) => {
    const params = {
        Bucket: "AWS_BUCKET_NAME",
        Key: `${Date.now()}-${file.name}`,
        Body: file,
        ContentType: file.type,
    }
    return s3.upload(params).promise()
}