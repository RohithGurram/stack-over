import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from "./routes/users.js";

const app=express();
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.get('/',(req, res)=>{
    res.send("This is a stack overflow clone API")
})

app.use("/user", userRoutes);

const PORT = process.env.PORT || 4000

const CONNECTION_URL= "mongodb://dragonair57:admin@ac-kgicbq2-shard-00-00.hyd7eyh.mongodb.net:27017,ac-kgicbq2-shard-00-01.hyd7eyh.mongodb.net:27017,ac-kgicbq2-shard-00-02.hyd7eyh.mongodb.net:27017/database?ssl=true&replicaSet=atlas-5sy1kx-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect( CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true })
    .then(() => app.listen(PORT,() => {console.log(`server running on ${PORT}`)}))
    .catch((err) => console.log(err.message))
