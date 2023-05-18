import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'crudperson'
})

app.get('/', (req, res) =>{
    const sql = " SELECT * FROM Student";
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "Erroe inside serveur"});
        return res.json(result);
    } )
})






app.listen(8081, ()=>{
    console.log("working");
})
