const mongoURI = require("./backend/db");
const food_details = require("./backend/models/FoodDet");

const datajson = require("./foodData2.json");

const start = async () => {
    try {
        await mongoURI("mongodb+srv://riyag12:riya12@cluster0.knahmuf.mongodb.net/?retryWrites=true&w=majority");
        await food_details.create(datajson);
        console.log("success");
        
    } catch (error) {
        console.log(error);
    }
};

start();