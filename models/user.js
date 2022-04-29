const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    nom: String,
    password: String,
});

module.exports  = mongoose.model("users", userSchema);