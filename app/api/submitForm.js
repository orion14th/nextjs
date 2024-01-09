// pages/api/submitForm.js

import mysql from 'mysql';

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'crggiib_db222503',
  password: '2hDNUhU*cddgki38',
  database: 'crggiib_db222503_learno_churno',
});


 


export default function handler(req, res) {
  if (req.method === 'POST') {
    const { nameSoftware, emailSoftware, messageSoftware } = req.body;

    // Validate the received data (add more validation as needed)
    if (!nameSoftware || !emailSoftware || !messageSoftware) {
      res.status(400).json({ error: 'Incomplete form data' });
      return;
    }

    // Use the connection pool to execute the SQL query
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Database connection error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      // MySQL query to insert data into the table
      const insertQuery = 'INSERT INTO aaa (nameSoftware, emailSoftware, messageSoftware,nameArt, emailArt, messageArt) VALUES (?, ?, ?,?, ?, ?)';
      connection.query(insertQuery, [nameSoftware, emailSoftware, messageSoftware,nameArt, emailArt, messageArt], (queryError, results) => {
        // Release the connection back to the pool
        connection.release();

        if (queryError) {
          console.error('Database query error:', queryError);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }

        console.log('Form data inserted successfully');
        res.status(200).json({ message: 'Form submitted successfully' });
      });
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
