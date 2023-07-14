const { error } = require('console')
const express = require('express')
const app = express()
const mysql = require('mysql')
const port = 4000
const cors = require('cors');
const bodyparser=require('body-parser')
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(bodyparser.urlencoded());

app.use(bodyparser.json());

if (!port) {
    console.error('please define port')
}

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'webwhiz studio'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});



app.post('/collect_contact', (req, res) => {
    console.log(req.body)
    let name =  req.body.name
    let email = req.body.email
    let message = req.body.message
    
    let sql;
    if (name, email, message) {
        if (name.length < 50 & email.length < 100 & message.length < 2000) {
            sql = `INSERT INTO contacts(name, email, message) VALUES ('${name}','${email}','${message}')`
            con.query(sql, (err, data) => {
                if (err) {
                    res.json({ 'error': 'database issue' })
                    console.log('byy')
                } else {
                    res.json({ 'ok': 'insert' })
                }
            })
        } else {
            res.json({ 'error': 'values length is do long' })
        }
    } else {
        res.json({ 'error': 'value is not define' })
    }
})

//listen to port
app.listen(port, () => {
    console.log('app is runnig !')
})