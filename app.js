const mysql = require('mysql2');

// Replace these values with your RDS credentials
const dbConfig = {
  host: 'mysqldb.c9iuye0yaofx.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'mysql123',
  database: 'mysqldb',
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Simple query to select data from a table
pool.query('SELECT * FROM your_table_name', (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }

  console.log('Query results:', results);

  // Close the connection pool
  pool.end((err) => {
    if (err) {
      console.error('Error closing connection pool:', err);
    }
  });
});
