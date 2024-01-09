import mysql from 'mysql'; // Import MySQL driver

export default async function handler(req, res) {
  // Access form data from request body

console.log('aaaa');

  const { nameSoftware, emailSoftware, messageSoftware, nameArt, emailArt, messageArt } = req.body;

  // Validation (replace with your logic)


  if (!nameSoftware || !emailSoftware || !messageSoftware || !nameArt || !emailArt || !messageArt) {
    res.status(400).json({ error: 'Incomplete form data' });
    return;
  }

  // ...

  // Database credentials (replace with your values)
  const dbConfig = {
    host: 'localhost',
    user: 'crggiib_db222503',
    password: '2hDNUhU*cddgki38',
    database: 'crggiib_db222503_learno_churno',
  };

  try {
    // Connect to database
    const connection = mysql.createConnection(dbConfig);
    await connection.connect();

    // Insert data into the database
    const query = `INSERT INTO aaa (nameSoftware, emailSoftware, messageSoftware, nameArt, emailArt, messageArt) VALUES (?, ?, ?,?, ?, ?)`;
    const [result] = await connection.query(query, [nameSoftware, emailSoftware, messageSoftware, nameArt, emailArt, messageArt]);

    res.status(201).json({ message: 'Data submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit data' });
  } finally {
    connection.end(); // Close database connection
  }
}
