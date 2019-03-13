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
    let content = JSON.stringify(req.body)
    fs.appendFile('output.txt', content, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Wrote To File")
        }
    })
    res.send("File written.")
})
app.listen(PORT, ()=>{console.log(`Listening on ${PORT}`)});