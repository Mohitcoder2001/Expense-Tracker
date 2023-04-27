const express = require('express')
const cors = require('cors');
const app = express()
const {db} = require('./db/db');
const {readdirSync} = require('fs')
//require ('dotenv').config();

//const PORT = process.env.PORT;
//middlewares
const PORT = process.env.PORT || 5000;
require('dotenv').config();
app.use(express.json())
app.use(cors())
//make server
/*app.get('/',(req,res)=>{
    res.send('Hello World');
})*/

readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/' + route)))
const server = () =>{
     //console.log("You are listening on ",PORT);
     db()
     app.listen(PORT, () => {
        console.log('Listening on ',PORT);
     });
};

server();