const { appBarClasses, CssBaseline } = require("@mui/material")

const express = require("express")
const {connectToDb, getDB} = require('./db')


//init app

const app = express()

//db connection
let db

connectToDb((err) => {
    if(!err){
        app.listen(3001, ()=>{
            console.log('app listening on port 3001')
        })
        db = getDB()
    }
})


app.get('/courses', (req,res)=> {
    
    const filter = {};
    const projection = {
        'course': 1, 
        '_id': 0
    };

    
    const coll = getDB('CoursDB').collection('courses');
    const cursor = coll.find(filter, { projection });
    const result = cursor.toArray();
    
    
    res.json({mssg : "welcome to the api"})
    res.json({mssg : result})
    //res.json({res:result})
})

