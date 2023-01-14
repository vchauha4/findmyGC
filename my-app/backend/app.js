const { appBarClasses, CssBaseline } = require("@mui/material")

const express = require("express")
const { ObjectId } = require("mongodb")
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


app.get('/courses', async(req,res)=> {
    
    const filter = {};
    const projection = {
        'course': 1, 
        '_id': 0
    };

    
    const coll = getDB('CoursDB').collection('courses');
    const cursor = await coll.distinct('course');
  
    
    
    res.json(cursor)

})

app.get('/departments', async(req,res)=> {
    
    const filter = {};
    const projection = {
        'department': 1, 
        '_id': 0
    };

    
    const coll = getDB('CoursDB').collection('courses');
    const cursor = await coll.distinct('department');
    
    
    
    res.json(cursor)

})

app.get('/courses/:id', async(req,res)=>{

    if(ObjectId.isValid(req.params.id)){
        const filter = {_id: ObjectId(req.params.id)};
        const projection = {
            'department': 0, 
            '_id': 0, 
            'messengerGroups': 0
          };
        const coll = getDB('CoursDB').collection('courses');
        const cursor =  coll.find(filter,{projection});
        const result = await cursor.toArray();
    
        res.json(result)
    }
    else{
        res.status(500).json({error:"not a valid id"})
    }
    
})

app.get('/id/:bookname', async(req,res) =>{
    console.log(req.params.bookname)
    const filter = {'course':a};

    const coll = getDB('CoursDB').collection('courses');
    const cursor = coll.find(filter);
    const result = await cursor.toArray();
    
    res.json(result)
})


