const mongoose=require('mongoose');
const mongoURI="mongodb://127.0.0.1:27017/foodmonk?directConnection=true";



const connectToMongo =async() =>{
    await mongoose.connect(mongoURI,{useNewUrlParser:true})
    .then(()=>console.log("Connected to mongo!!"))
    .catch(()=>console.log("Connection failed to mongo!!"))
}

module.exports=connectToMongo;
