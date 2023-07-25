const mongoose = require('mongoose');

const optionSchema =new mongoose.Schema({
    half :{
        type :String,
    },
    full :{
        type: String,
    },
    regular :{
        type:String,
    },
    medium:{
        type:String,
    },
    large:{
        type: String,
    },
});

const FoodDetSchema = new mongoose.Schema({
    CategoryName:{
    type: String,
    },
    name: {
        type : String,
        required :true,
    },
    img: {
        data: Buffer,
        contentType: String,
    },
    options : {
        type:[optionSchema],
        default:undefined,
    },
    description: {
        type :String,
    },
} 
);
const FoodDet = mongoose.model('food_details', FoodDetSchema);
module.exports = FoodDet;