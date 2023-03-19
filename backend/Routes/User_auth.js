const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {body,validationResult} = require('express-validator');
// const { countDocuments } = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const JWT_SECRET = "JWT_SECCRET-ForYow#youaresecurenow!@#$"


// SIGNUP USER.............................................

router.post("/createUser",
[body('email','should contain "@" and "." as it is a email').isEmail(),
body('password','password should be atleast 5 character long').isLength({min:5})]
,async(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
     return res.status(400).json({errors: error.array()});
    }

    // passwordHashing................
    const salt = await bcrypt.genSalt(8);
    let securePass = await bcrypt.hash(req.body.password,salt)



    try {
      await  User.create({
            name: req.body.name,
            email: req.body.email,
            password: securePass,
            location: req.body.location
        }).then(res.json({success:true}))
        
    } catch (error) {
        console.log('error!')
        res.json({success:false})
    }
})


// LOGIN USER...................................


router.post("/loginUser",async(req,res)=>{
  var email = req.body.email;
    try {
      let userData = await  User.findOne({email})
        if(!userData){
            return res.status(400).json({errors: "Try With Correct Email!!"});
        }

        // passwordCheck.............................
        const bcryptPass = await bcrypt.compare(req.body.password,userData.password)

        if(!bcryptPass){
            return res.status(400).json({errors: "Try With Correct Password!!"});
        }

        // JWT_SIGNATURE.................................
        const JWT_Data = {
            user:{
                id:userData.id
            }
        }
        
        const authToken = jwt.sign(JWT_Data,JWT_SECRET);
        return res.json({success:true,authToken,userName:userData.name,email:userData.email});

    } catch (error) {
        console.log('error!')
        res.json({success:false})
    }
})


module.exports = router;