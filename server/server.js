const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const cors = require('cors');

const api = require('./routes/api');
const app = express();


// we configure it to allow any domain by creating an option-object.
var corsOptions = {
    origin : '*',
    optionsSuccessStatus: 200    
}
app.use(cors(corsOptions));



app.use(bodyParser.json());
app.use('/api', api);



app.get('/',(req , res) => {
    res.send('Hello form server')
})


app.listen(PORT,() => {
    console.log('Express server currently running on port '  + PORT);
})