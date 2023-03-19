const mongoose = require('mongoose');

const { Schema } = mongoose;

const FoodCatSchema = new Schema({FoodCatSchema:String}, { strict: false });

const FoodCat = mongoose.model('foodcategory', FoodCatSchema);
module.exports = FoodCat;