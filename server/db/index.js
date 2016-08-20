var mysql = require('mysql');


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".



var connection = mysql.createConnection({
  host: 'localhost',
  // host     : '127.0.0.1',
  // user     : '< MySQL username >',
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect();

// connection.query('SELECT * from < table name >', function(err, rows, fields) {
  // MAYBE ADD JOIN???
connection.query('SELECT * from messages', function(err, rows, fields) {
  if (!err) {
    console.log('The solution is: ', rows);
  } else {
    console.log('Error while performing Query.', err);
  }
});

connection.end();
