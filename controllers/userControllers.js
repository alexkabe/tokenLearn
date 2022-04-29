const User = require("../models/user");
var jwt = require('jsonwebtoken');
const { json } = require("express/lib/response");

function generateToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1800s'});    
}

function generateRefreshToken(user){
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '1800s'});    
}




exports.login = (req, res)=>{
    res.send("Salut la page login")
};

exports.authUser = (req, res) => {
    // console.log(req.headers['authorization'])
    User.find({name: req.body.pseudo, password: req.body.password}).then(item=>{
        if(item.length !=0){
            console.log("Vous etes connecte ");
            let user = {
                pseudo: item[0].pseudo,
                password: item[0].password
            }
            const token = generateToken(user);
            res.status(200).json({message: " Je suis connecter", token: token});
        }else{
            console.log("Vous etes pas connecte");
            res.status(401).send("Vous etes connectes")        }
    },()=>{
        console.log("Error de connexion");
    }); 
}



exports.test = (req, res)=>{
    console.log(req.token)
    res.status(200).json({message: "Vous estes authentifies"});
}