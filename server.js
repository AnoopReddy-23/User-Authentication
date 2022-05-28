//creating express app
const exp=require('express') //returns functions
const app=exp() //express obj--->contains http server object

//importing MongoClient
const mclient=require("mongodb").MongoClient;

//import path module(core module)
const path=require('path')

//import dotenv which gives "process.env"
require('dotenv').config()

//connect build of react app with nodejs
app.use(exp.static(path.join(__dirname,'./build')))

//import userApp and productApp
const userApp=require('./APIS/userApi');
const productApp=require('./APIS/productApi');
const { request } = require('http');
const { response } = require('express');


//DB connection URL
const DBurl=process.env.DATABASE_CONNECTION_URL;


//connect with mongodb server
mclient.connect(DBurl)
.then((client)=>{

    //get db object
    let dbObj=client.db("vnr2022db");

    //create collection objects
    let userCollectionObject=dbObj.collection("usercollection");
    let productCollectionObject=dbObj.collection("productcollection");

    //sharing collection objects with API's
    app.set("userCollectionObject", userCollectionObject) 
    app.set("productCollectionObject", productCollectionObject)

    console.log("DB connection success")
})
.catch(err=>console.log("Error in DB connection", err))



//use middleware to execute for a specific path
app.use('/user-api',userApp)
app.use('/product-api',productApp)

//dealing with page refresh
app.use('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'./build/index.html'))
})

//handling invalid path by using middleware
app.use((request,response,next)=>{
    response.send({message:`Path ${request.url} is Invalid`});
})


//Error handling middleware
app.use((error,request,response,next)=>{
    response.send({message:"Error occured",reason:`${error.message}`})
})


//assign port number
const port=process.env.PORT;
app.listen(port,()=>console.log(`Web-Server running on port ${port}.....`))