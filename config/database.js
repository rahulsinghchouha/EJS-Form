const mongoose = require('mongoose');
require('dotenv').config();

const databaseConnect = async () =>{
    await mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log("Data Base Connected Succesfully")})
    .catch((error)=>{
        console.log("data base connection error",error);
        process.exit(1);
    })
}
module.exports = databaseConnect; //for a single 