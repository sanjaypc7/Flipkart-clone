import express from 'express';
import dotenv from 'dotenv';
import Connection from './databse/db.js';
import DefaultData from './default.js';
import router from './Routes/route.js';
import cors from 'cors'
import bodyParser from 'body-parser'
const app=express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',router);


const PORT=8000;

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);



app.listen(PORT,()=> console.log(`server is running on port ${PORT}`));

DefaultData();