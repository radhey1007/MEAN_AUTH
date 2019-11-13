const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();

app.use(bodyParser.json());


app.get('/',function(req , res){
    res.send('Hello form server')
})


app.listen(PORT,function(){
    console.log('server running on port', PORT);
})