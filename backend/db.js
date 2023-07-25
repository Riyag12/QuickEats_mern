const mongoose=require('mongoose');
const mongoURI="mongodb+srv://username:password@cluster0.knahmuf.mongodb.net/?retryWrites=true&w=majority";


// MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
//   if(err) { return console.dir(err); }

//   var collection = db.collection('kittens');

//     collection.find().toArray(function(err, kittens) {
//     });    
// });


// const afterConnectSuccess =async () =>{
//     console.log("Connected to Mongo!!");
//     const fetched_data = await mongoose.connect(mongoURI, function(err, db) {
//         if(err) { return console.error(err); }
      
//         const collection = db.collection('users');
      
//           collection.find({}),(function(err, result) {
//             global.food_details = result;
//           });    
//       });
// }
const afterConnectSuccess =async () =>{
    console.log("Connected to Mongo!!");
}



const connectToMongo =async() =>{
    await mongoose.connect(mongoURI,{useNewUrlParser:true})
    .then(afterConnectSuccess)
    .catch(()=>console.log("Connection failed to mongo!!"))
}

module.exports=connectToMongo;
