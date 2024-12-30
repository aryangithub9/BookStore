import db from '../db.js';
export const createBook = async (req, res) => {
    const {title,descriptions,cover} = req.body;
    const query = `insert into booksd (title,descriptions,cover) values ('${title}','${descriptions}','${cover}')`;
    db.query(query,(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.json({message: 'Book added successfully'});
        }
    })
}

export const updateBook = async (req, res) => {
    const {title,descriptions,cover} = req.body;
    const query = `update booksd set title = '${title}', descriptions = '${descriptions}', cover = '${cover}' where id = ${req.params.id}`;
    db.query(query,(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.json({message: 'Book updated successfully'});
        }
    })
}

export const deleteBook = async (req, res) => {
    const query = `delete from booksd where id = ${req.params.id}`;
    db.query(query,(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.json({message: 'Book deleted successfully'});
        }
    })
}

export const allbooks = async (req, res) => {
    const query = 'select * from booksd';
    db.query(query,(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.json(result);
        }
    })
}