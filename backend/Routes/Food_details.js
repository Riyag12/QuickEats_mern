const { response } = require('express');
const express = require('express');
const router = express.Router();
const FoodDet = require('../models/FoodDet');
const FoodCat = require('../models/FoodCat');



router.post('/foodData',async(req,res)=>{ 
    try {
       FoodDet.find().then((result)=>{
        res.send(result)
       }).catch((err)=>{
        console.log(err);  
       })
      
    } catch (error) {
        console.error(error.message);
        res.send("server error!!")
    }
})
router.post('/foodCat',async(req,res)=>{
    try {
       FoodCat.find().then((result)=>{
        res.send(result)
       }).catch((err)=>{
        console.log(err);
       })
      
    } catch (error) {
        console.error(error.message);
        res.send("server error!!")
    }
})






module.exports = router;