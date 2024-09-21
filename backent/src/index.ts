import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from "mongoose";
import auth from './Routes/AuthRoute'

const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();

const port = process.env.PORT; 

mongoose
    .connect(process.env.MONGO_DB)
    .then(() => {
        console.log(`DataBase connected`)
    }).catch((e) => {
        console.log(e);
    })

app.listen(port, () => {
    console.log(`User Server is running at ${port}`);  
  });

  app.use('/auth', auth) 