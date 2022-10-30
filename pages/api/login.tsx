// import db from '../pages/api/db';
import AWS from 'aws-sdk'
// import {hash} from 'bcrypt'
import {NextApiResponse, NextApiRequest} from 'next'

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region:"eu-west-1" 
});

const db =new AWS.DynamoDB.DocumentClient({apiVersion:"latest"});

const GetUser= async (req:NextApiRequest, res:NextApiResponse)=>{
    const TABLE_NAME = "users"
    // console.log(req.body)
    const params = {
        TableName:TABLE_NAME, 
        Key:{
            email: req.body.email
        }
    }
    const data = await db.get(params).promise()
    .then((value)=>{
        res.status(200).json(value)
    })

    const user = await data;
    console.log(user);

}

export default GetUser;