const mongoose = require('mongoose');
const {Schema} = mongoose;

const OrderSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    order_data:{
        type: Array,
        required: true
    }
})

const Order = mongoose.model('userOrderDet',OrderSchema);
  module.exports=Order;