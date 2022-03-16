const mongoose = require("mongoose")



const connect = () => {
    mongoose.connect(`mongodb://localhost:27017/${process.env.DBNAME}`)
    const database = mongoose.connection

    database.once("open", () => {
        console.log("Connected to database");
    });
    database.on("error", () => {
        console.log("Error connecting to database");
    });
}

const disconnect = () => {
    mongoose.disconnect();
  };

module.exports={connect,disconnect}