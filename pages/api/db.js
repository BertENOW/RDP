import AWS from 'aws-sdk'

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.AWS_SECRET_ACCESS_KEY,
    region:"eu-west-1" 
});

const db =new AWS.DynamoDB.DocumentClient({apiVersion:"latest"});

export default db;