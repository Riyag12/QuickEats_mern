const express = require('express');
const router = express.Router();
const Order = require('../models/Order');


router.post('/orderData',async(req,res)=>{
    let data = req.body.order_data;
    await data.splice(0,0,{order_data: req.body.order_date})

    //if email is not exixsts in db then create; else InsertMany()
    let eID = await Order.findOne({email: req.body.email})
    console.log(eID) 
    if(eID === null){
        try {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(()=>{
                res.json({success:true})
            })
        } catch (error) {
            // console.log(error.message);
            res.send("Server Error",error.message);
        }
    }
    else{
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                {$push:{order_data:data} }).then(()=>{
                    res.json({success:true })
                })
        } catch (error) {
            // console.log(error.message);
            res.send("Servetr Error",error.message);
        }
    }
})

router.post('/myOrderData', async(req,res)=>{
    try {
        let myOrders = await Order.findOne({'email':req.body.email});
        res.json({myOrderData:myOrders})
    } catch (error) {
        console.log(error.message);
        res.send("Servetr Error",error.message);
    }
})


module.exports = router;