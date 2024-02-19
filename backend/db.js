const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

//When strict option is set to true, Mongoose will ensure that only the fields that are specified in your Schema will be saved in the database, and all other fields will not be saved (if some other fields are sent).

//Right now, this option is enabled by default, but it will be changed in Mongoose v7 to false by default. That means that all the fields will be saved in the database, even if some of them are not specified in the Schema model.

const mongoURI =
    "mongodb+srv://net-ninja:test123@node-tuts.knocr.mongodb.net/mydatabase";
// const mongoURI = 'mongodb://localhost:27017/mylocaldatabase';

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    });
};

module.exports = connectToMongo;
