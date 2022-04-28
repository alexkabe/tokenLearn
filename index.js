const express = require('express')
var jwt = require('jsonwebtoken');


const app = express()
const port = 3000



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});