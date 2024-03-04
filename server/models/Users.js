const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;

// mongoose
//   .connect('mongodb://localhost:27017',{})
//   .then(() => console.log("database connection established"));