import mysql, { Connection } from 'mysql2';

const db: Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'apartamento'
  });

  db.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to database!');
    
  });

  export default db