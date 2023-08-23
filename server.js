const express = require('express');
const bodyParser = require('body-parser');
const  multer = require('multer');

const app = express();
const port = 3000;
app.use(express.static('public'));
const cars= require('./cars.json');
app.get('/api/cars', (req,res)=>
    {res.json(cars)});
app.listen(port, ()=>
    {console.log(`Server is Listening on Port: ${port}`);
    });


    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    const upload = multer({ dest: 'uploads/' });
    app.post('/api/cars',(req,res)=>
    {
        const NewCar = req.body;
        NewCar.id = cars.length +1;

        NewCar.image = req.file ? req.file.filename:'';

        cars.push(NewCar);
        res.json({message:'Car Added!',car:NewCar});

    });