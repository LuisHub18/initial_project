import mysql from "mysql";


export const conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'pwdata'
});

