const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const db = "mongodb+srv://radhey:radhey123@eventsdb-g4k5d.mongodb.net/eventsDB?retryWrites=true&w=majority";



mongoose.connect(db, {
        useNewUrlParser: true
    })
    .then(res => {
        console.log("Database connected Successfully...")
    })
    .catch(err => {
        console.log('Error', err);

    });

//   ********** Simple get Example *************

router.get('/', (req, res) => {
    res.send(`
    <div>
      <h1>Todo List</h1>
      <ul>
        <li >From API route</li>
        <li >Create my own API routes</li>
        <li >Login API</li>
        <li >Register API</li>
        <li >Get the list of events and special events</li>
      </ul>
    </div>
  `);
})

//    ********** Simple Register User *************

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData); // Model set the Data and after save
    user.save().then(registeredUser => {
        console.log('Data inserted Successfully');
        let payload = { subject:registeredUser._id};
        let token = jwt.sign(payload,'secretkey');
        res.status(200).send({token});
    }).catch(err => {
        console.log('Err in inserting data');
        console.error(err);
    })
})

//    ********** Simple login User *************

router.post('/login', (req, res) => {
    let userData = req.body;
    User.findOne({email: userData.email})
    .then( userInfo =>{
        console.log(userInfo , '========' , userData);
        if(!userInfo) return res.status(401).send('Invalid Email ID ' + userData.email);
        if(userInfo.password !== userData.password)  return res.status(401).send('Invalid Password');

        let payload = { subject:userInfo._id};
        let token = jwt.sign(payload,'secretkey');
        return res.status(200).send({token});
    })
    .catch(err => {
        console.error(err)
    })
})

//    ********** Simple Get Events *************

router.get('/events',(req, res) => {
    let events = [
        {
            "_id":"1",
            "name":"PLAY FANTASY",
            "description": "PLAY FANTASY GAME",
            "date" : "15 NOV , 2015" 

        },
        {
            "_id":"2",
            "name":"FANTASY CRICKET",
            "description": "PLAY FANTASY CRICKET GAME",
            "date" : "15 NOV , 2015" 

        },
        {
            "_id":"3",
            "name":"FANTASY FOOTBALL",
            "description": "PLAY FANTASY FOOTBALL GAME",
            "date" : "15 NOV , 2015" 

        },
        {
            "_id":"4",
            "name":"RUMMY",
            "description": "PLAY RUMMY GAME",
            "date" : "15 NOV , 2015" 

        },
        {
            "_id":"5",
            "name":"LUDO",
            "description": "PLAY LUDO GAME",
            "date" : "15 NOV , 2015" 

        },
        {
            "_id":"6",
            "name":"POOL",
            "description": "PLAY POOL GAME",
            "date" : "15 NOV , 2015" 

        },
        {
            "_id":"7",
            "name":"SPEED CHESS",
            "description": "PLAY SPEED CHESS",
            "date" : "15 NOV , 2015" 

        },
        {
            "_id":"8",
            "name":"FOOTBALL STARS",
            "description": "PLAY FOOTBALL STARS GAME",
            "date" : "15 NOV , 2015" 

        }
    ]
    res.json(events);
})

//    ********** Simple Get Special Events *************


router.get('/specialevents',(req, res) => {
    let specialevents = [
        {
            "_id":"1",
            "name":"PLAY FANTASY",
            "description": "PLAY FANTASY GAME",
            "date" : "15 NOV , 2015" 

        },
        {
            "_id":"2",
            "name":"FANTASY CRICKET",
            "description": "PLAY FANTASY CRICKET GAME",
            "date" : "15 NOV , 2015" 

        },
        {
            "_id":"3",
            "name":"FANTASY FOOTBALL",
            "description": "PLAY FANTASY FOOTBALL GAME",
            "date" : "15 NOV , 2015" 

        },
        {
            "_id":"4",
            "name":"RUMMY",
            "description": "PLAY RUMMY GAME",
            "date" : "15 NOV , 2015" 

        },
        {
            "_id":"5",
            "name":"LUDO",
            "description": "PLAY LUDO GAME",
            "date" : "15 NOV , 2015" 

        },
        {
            "_id":"6",
            "name":"POOL",
            "description": "PLAY POOL GAME",
            "date" : "15 NOV , 2015" 

        },
        {
            "_id":"7",
            "name":"SPEED CHESS",
            "description": "PLAY SPEED CHESS",
            "date" : "15 NOV , 2015" 

        },
        {
            "_id":"8",
            "name":"FOOTBALL STARS",
            "description": "PLAY FOOTBALL STARS GAME",
            "date" : "15 NOV , 2015" 

        }
    ]
    res.json(specialevents);
})

module.exports = router