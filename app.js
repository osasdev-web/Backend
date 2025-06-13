const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

app.get('/planets', (req, res) => {
    res.json({
        "planets": [{
            name:"Mercury",
            colour:"Red",
            distance: "0.4"
        },
        
        {name:"Venus", distance:7.5, colour:"Red"}, 
        {name:"Earth", distance:0.5, colour:"light blue"},
        {name:"Mars", distance:5.7, colour:"black"},
        {name:"Jupiter", colour:"blue", distance:6.6},
        {name:"Saturn", colour:"green", distance:9.1},
        {name:"Uranus", distance:8.4, colour:"yellow"},
        {name:"Neptune", colour:"pink", distance:4.7},
    ]
        
    })
});


app.get('/planets/:id', (req, res) => {

    const planetId = req.params.id;

    // fake db

    const db = [{id:1,name:"Mercury"},{id:2,name:"Venus"},{id:3,name:"Earth"}]

    // use the planetID to fetch data from DB


    res.json({
        data:db [planetId-1]
    })
});


const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Express server listening at http://localhost:${PORT}`);
});