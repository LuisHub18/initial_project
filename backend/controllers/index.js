import { conection } from '../database.js';

const getClients = (req, res) => {
    conection.query('select * from clientes;', (error, filas) =>{
        if(error){
            throw error;
        }else{
            console.log('All well!')
            res.send(filas);
        }
    });
}

export default getClients;

// export const getUsers = async (req: Request, res: Response): Promise<Response> => {
//     try {
//         const response: QueryResult = await pool.query('SELECT * FROM users');
//         return res.status(200).json(response.rows);
//     } catch (e) {
//         console.log(e);
//         return res.status(500).json('Unexpected error');
//     }
// }