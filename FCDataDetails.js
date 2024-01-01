const express = require('express');
const mongoose = require('mongoose');
const foodcourt=express();
const cors=require('cors');
const bodyparser= require('body-parser');

foodcourt.use(express.urlencoded({extended:false}));

foodcourt.use(cors({origin:'*'}));
foodcourt.use(bodyparser.json());
const database="FoodCourt";
const mongoUrl="mongodb+srv://FoodCourt:foodcourt2312@cluster0.twvmn3h.mongodb.net/";

mongoose.connect(mongoUrl+database).then(()=>{
    console.log('mongodb is connected');
    foodcourt.listen(5000,()=>{
        console.log("5000 port is connected");
    })
})

foodcourt.get("/customerDetails",async(req,res)=>{
    console.log(req.body);
    const userDatas= await mongoose.connection.collection("customerDetails").find().toArray().then((value)=>{
        res.send(value);
    });  
})
foodcourt.get("/hotelDetails",async(req,res)=>{
    const userDatas= await mongoose.connection.collection("hotelDetails").find().toArray().then((value)=>{
        res.send(value);
    });  
})
foodcourt.post("/loggedCustomerDetails",async(req,res)=>{
    const userDatas= await mongoose.connection.collection("hotelDetails").find({phonenumber:req.body.phonenumber}); 
    console.log(userDatas);
})
