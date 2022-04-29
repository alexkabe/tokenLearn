const jwt = require('jsonwebtoken');



module.exports = (req, res, next) =>{
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    
    if(!token){
        return res.sendStatus(401);
    }
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if(err){
            
            console.log(token)
            return res.sendStatus(401)
        }
        req.token = user;
        next();
    }) 
}