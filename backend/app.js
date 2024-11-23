const express = require("express");
const app = express();

app.use(express.static("../frontend/public"));

app.get('/signin',(req,res)=>{
    console.log(req.query);
});

app.listen(8080);