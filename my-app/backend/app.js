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


app.get('/departments', (req,res)=> {
    let departments = []
    db.collection('department')
        .find() //cursor toArray forEach
        .forEach(department => departments.push(department))
        .then(()=>{
            res.status(200).json(departments)
        })
        .catch(()=>{
            res.status(500).json({error:'could not fetch documents'})
        })

    res.json({mssg : "welcome to the api"})

})

