const express = require("express");
const mysql = require("mysql2");
const app = express();

app.use(express.static("../frontend/public"));
app.set('view engine','ejs');

const db = mysql.createConnection({
    host:"localhost",
    user:"hiran",
    database:"lostfound"
})

app.get('/signin',(req,res)=>{
    db.query("select * from users where email=? and passwords=?",[req.query.email,req.query.password],(err,result)=>{
        if(result ==""){
            res.sendStatus(404);
        }
        else{
            res.render('login',{name:result.name,email:result.email});
        }
    });
});

app.listen(8080);