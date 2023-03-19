const mongoose = require('mongoose');

const { Schema } = mongoose;

const FoodDetSchema = new Schema({}, { strict: false });

const FoodDet = mongoose.model('food_details', FoodDetSchema);
module.exports = FoodDet;