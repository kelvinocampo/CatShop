import mysql from 'mysql2';
import dotenv from "dotenv";
dotenv.config();


const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  // password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
  // connectionLimit: 10,
  // queueLimit: 0
});

db.getConnection((err,conn)=>{
  if(err){console.log(err)}
})

export default db.promise()
