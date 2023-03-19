const connectToMongo = require ('./db');
const express=require ('express');
var cors = require('cors');

connectToMongo();

const app=express();





// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin,X-Requested-With, Content-Type,Accept"
//     ),
//     next();
// })
const port = 5000;
app.use(cors());
app.use(express.json())


app.use('/api', require("./Routes/User_auth"));
app.use('/api', require("./Routes/food_details"));
app.use('/api', require("./Routes/orderData"));
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


