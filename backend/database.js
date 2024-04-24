import {Pool} from 'mariadb';

const pool = new Pool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pwdata'
}); 

export default pool;