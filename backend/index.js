const express = require('express');
const app = express();
const port = 5000 ;
const connectToMongo = require ('./db');  

app.use(express.json())
connectToMongo();

app.use('/api',require("./Routes/User_auth"));
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

