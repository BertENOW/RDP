import AWS from 'aws-sdk'
import {NextApiRequest, NextApiResponse} from 'next'
import {hash } from 'bcrypt'

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region:"eu-west-1" 
});

const db =new AWS.DynamoDB.DocumentClient({apiVersion:"latest"});

const Register = async (req:NextApiRequest, res:NextApiResponse)=>{
    const TABLE_NAME='users'
    console.log(req.body)
    const awaitHash = hash(req.body.password, 10).then((hash)=>{
        return hash
    })
    const hashPass = await awaitHash;
    console.log(hashPass)
    
    const params = {
        TableName:TABLE_NAME,
        Item:{
            email:req.body.email, 
            password:req.body.password, 
            firstName:req.body.firstName, 
            lastName:req.body.lastName, 
            dateCreated:req.body.dateCreated
        }
    }
    await db.put(params).promise()
    .then((response)=>{
        res.status(200).json({response})
        console.log(response)
    })
    
}

export default Register