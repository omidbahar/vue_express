const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


//Midleware
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');
app.use('/api/posts',posts);

//Handle Production
app.use(express.static(__dirname+'/public'));

//Handle SPA
app.get(/.*/ , (req,res)=>{res.sendFile(__dirname+'/public/index.html')});

const port = 5000;
app.listen(port, ()=> { console.log('Server is running'); } )
