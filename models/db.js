const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'Root@123',
    database: 'project_db'
});

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });

  module.exports = connection;