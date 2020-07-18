const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ieeedb'
});

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    } else{
        console.log("DB IS CONNECTED");
    }
});

module.exports = mysqlConnection;