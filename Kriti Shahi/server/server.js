const express = require('express')
const bodyParser = require('body-parser')

const PORT = 3000
const api = require('./routes/api')
const app = express()

app.use(bodyParser.json())//To handle the json data

app.use('/api',api);
app.get('/', (req,res) => {
    res.send('Hello from server')
})

app.listen(PORT, () =>{
    console.log('Server running on localhost: ' +PORT)
})

