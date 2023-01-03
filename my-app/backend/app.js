const { appBarClasses } = require("@mui/material")
const express = require("express")


//init app

const app = express()

app.listen(3001, ()=>{

    console.log('app listening on port 3001')
}
)

app.get('/books', (req,res)=> {
    res.json({mssg : "welcome to the api"})

})

