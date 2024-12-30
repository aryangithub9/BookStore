import express from 'express';
import mysql from 'mysql2';
import cors from 'cors'
const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user:'root',
        password: 'Aryan@123',
        database: 'books'
    }
);

db.connect((err) => {
    if(err){
        console.log(err);
    } else {
        console.log('MySQL Database connected Sucessfully');
    }
})

app.get('/books',(req,res)=>{
    const query = 'select * from booksd';
    db.query(query,(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.json(result);
        }
    })
})


app.delete('/books/:id',(req,res)=>{
    const query = `delete from booksd where id = ${req.params.id}`;
    db.query(query,(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.json({message: 'Book deleted successfully'});
        }
    })
})

app.put('/books/:id',(req,res)=>{
    const {title,descriptions,cover} = req.body;
    const query = `update booksd set title = '${title}', descriptions = '${descriptions}', cover = '${cover}' where id = ${req.params.id}`;
    db.query(query,(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.json({message: 'Book updated successfully'});
        }
    })
})

app.get('/books/:id',(req,res)=>{
    const query = `select * from booksd where id = ${req.params.id}`;
    db.query(query,(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.json(result);
        }
    })
})

app.post('/books',(req,res)=>{
    const {title,descriptions,cover} = req.body;
    const query = `insert into booksd (title,descriptions,cover) values ('${title}','${descriptions}','${cover}')`;
    db.query(query,(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.json({message: 'Book added successfully'});
        }
    })
})




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});