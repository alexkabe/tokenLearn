const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/groupe2");
const db = mongoose.connection;

db.once("open", ()=>{
    console.log("Salut je suis connecte");
});