const mongoose = require('mongoose');

//const { Schema } = mongoose;

const FoodCatSchema = new mongoose.Schema({
    CategoryName:{
    type: String,
    },
} 
);

const FoodCat = mongoose.model('foodcategory', FoodCatSchema);
module.exports = FoodCat;