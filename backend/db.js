import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Aryan@123',
    database: 'books',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL Database:', err);
    } else {
        console.log('MySQL Database connected Successfully');
    }
});

export default db;
