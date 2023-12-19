const mongoose = require('mongoose')

const connectToMongo =async (url)=>{
    try {
        await mongoose.connect(url)
        console.log("Connected to mongoose");
    } catch (error) {
        console.log({message:"Error in connecting mongoose"});
    }
}

module.exports = connectToMongo