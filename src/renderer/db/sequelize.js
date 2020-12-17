const config = require('./env');

var mysql = require('mysql');

// Add the credentials to access your database
var connection = mysql.createConnection({
    host     : config.host,
    user     : config.username,
    password : config.password, // or the original password : 'apaswword'
    database : config.database
});

// connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err){
        // console.log("Error Code:",err.code);
        // console.log(err.fatal);
        // console.log(config);
        
    }
});
module.exports = connection