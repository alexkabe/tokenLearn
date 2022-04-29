const connexion = require('./connexion');
const user = require('./controllers/userControllers')
const express = require('express')
const http = require("http");
const authVerifiy = require('./middleware/authVerify');
// var bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

process.env.ACCESS_TOKEN_SECRET;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;




app.get('/', user.login);
app.post('/auth', user.authUser)
app.get('/test', authVerifiy , user.test);

app.listen(port, () => {
  console.log(`Serveur is running on a http://localhost:${port}`)
}); 