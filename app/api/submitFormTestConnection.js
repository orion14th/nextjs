
  import mysql from 'mysql'; // Import MySQL driver

// Database credentials (replace with your values)
const dbConfig = {
    host: 'localhost',
    user: 'crggiib_db222503',
    password: '2hDNUhU*cddgki38',
    database: 'crggiib_db222503_learno_churno',
};

export default async function handler(req, res) {
  try {
    // Connect to database
    const connection = mysql.createConnection(dbConfig);
    await connection.connect();

    console.log('Database connection successful!');
    res.status(200).json({ message: 'Database connection established' });
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).json({ error: 'Failed to connect to database' });
  } finally {
    connection.end(); // Close database connection
  }
}
