const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect("mongodb+srv://userone:2024@cluster0.ylltuwg.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {console.log("MongoDB Connected")})
    .catch((err) => {console.log(err.message); process.exit(1);})
};

module.exports = connectDB; 