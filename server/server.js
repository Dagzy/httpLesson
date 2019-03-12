const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const fs = require('fs');
const PORT = 9001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.get('/', (req, res)=>{
    console.log(req)
})
app.use('/',(req, res)=>{
    let stuff = JSON.stringify(req.body)
    console.log(stuff)
    let content = req.body.theInput
    let text = `${content}, `
    fs.appendFile('output.txt', stuff, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Wrote To File")
        }
    })
    res.send("File written.")
})
app.listen(PORT, ()=>{console.log(`Listening on ${PORT}`)});