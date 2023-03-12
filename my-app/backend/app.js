

const { appBarClasses, CssBaseline } = require("@mui/material")

const express = require("express")
const { ObjectId } = require("mongodb")
const { json } = require("react-router-dom")
const {connectToDb, getDB} = require('./db')

const cors = require('cors');

//init app

const app = express()
app.use(cors())
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
    
    

    
    const coll = getDB('courseDB').collection('courses');
    const cursor = await coll.distinct('course');
  
    
    
    res.json(cursor)

})

app.get('/departments', async(req,res)=> {
    

    
    const coll = getDB('courseDB').collection('courses');
    const cursor = await coll.distinct('department');
    
    
    
    res.json(cursor)

})

app.get('/courses/:id', async(req,res)=>{


        const filter = {'department': req.params.id};
        const projection = {
            '_id':0,
            'course':1, 
            'messengerGroups': 1
          };
        const coll = getDB('courseDB').collection('courses');
        const cursor =  coll.find(filter,{projection});
        const result = await cursor.toArray();
    
        res.json(result)

    
})
app.get('/gc/:id', async(req,res)=>{


    const filter = {'course': req.params.id};
    const projection = {
        '_id':0,
        'messengerGroups': 1
      };
    const coll = getDB('courseDB').collection('courses');
    const cursor =  coll.find(filter,{projection});
    const result = await cursor.toArray();

    res.json(result)


})




