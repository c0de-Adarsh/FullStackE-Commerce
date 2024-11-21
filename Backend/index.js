const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');
dotenv.config();

connectDB();

const app = express();

app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send('hello world')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running is on port${PORT}`)
})