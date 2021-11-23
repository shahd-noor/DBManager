const express = require('express');
const mysql = require('mysql');

/*const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 
});*/

db.connect((err) => {
    if (err){
        throw err;
    }
    console.log("Connected!");
});

const app = express();

//const port = "3000";

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});