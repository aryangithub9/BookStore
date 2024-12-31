import mysql from 'mysql2';

function createDatabaseConnection(config) {
    const db = mysql.createConnection(config);

    db.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL Database:', err);
        } else {
            console.log('MySQL Database connected successfully');
        }
    });

    return db;
}

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Aryan@123',
    database: 'books',
};

const db = createDatabaseConnection(dbConfig);

export default db;
