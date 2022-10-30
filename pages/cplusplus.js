import React,{useEffect, useState} from 'react'
import db from './api/db'
import NavBar from '../components/navbar/navbar'

const CPlusPlus =()=>{
    const TABLE_NAME = 'users'
    const EMAIL = 'bertrand0493@gmail.com'

    const getData = async =>{
        const params = {
            TableName: TABLE_NAME, 

        };
        const data = db.scan(params).promise()
        .then((value)=>{
            console.log(value);
        });
    }

    const getUserById = async(email)=>{
        const params ={
            TableName:TABLE_NAME,
            Key:{
                email:EMAIL
            }
        }
        // console.log(params)
        const val=[]
        const data =db.get(params)
        .promise()
        .then((value)=>{
            // return value
            console.log(value)
        })

    }

    const addOrUpdateData = async(data) =>{
        const params={
            TableName:TABLE_NAME,
            Item:data
        }
        await db.put(params).promise();
    }
    const user1={
        email:"bobduhamel@gmail.com", 
        password: "kjnjbjee"
    }
    // getUserById(EMAIL);
    // getData();
    // addOrUpdateData(user1);
    return(
        <div>
            <NavBar/>
        </div>
    )
}

export default CPlusPlus;

export async function getStaticProps(){
    const TABLE_NAME = 'users'
    const EMAIL = "bertrand0493@gmail.com"
    const params = {
        TableName:TABLE_NAME, 
        Key:{
            email:EMAIL
        }
    }
    const data = await db.get(params).promise()
    .then((value)=>{
        return value
    })
    const user = await data;
    console.log(user.Item)
    return {
        props:{
            user:data.Item
        }
    }

}