const mongoURI = require("./backend/db");
const foodcategory = require("./backend/models/FoodCat");

const catjson = require("./foodCategory.json");

const start = async () => {
    try {
        await mongoURI("mongodb+srv://username:password@cluster0.knahmuf.mongodb.net/?retryWrites=true&w=majority");
        await foodcategory.create(catjson);
        console.log("success");
        
    } catch (error) {
        console.log(error);
    }
};

start();
