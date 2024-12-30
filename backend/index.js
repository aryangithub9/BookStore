import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'; 
import router from './routes/Book.Routes.js';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());



app.use('/books', router);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});