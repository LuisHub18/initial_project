import { conection } from '../database.js';


export const getClients = (req, res) => {
    conection.query('select * from clientes;', (error, filas) => {
        if(error){
            throw error;
        } else {
            console.log('¡All Well!');
            res.send(filas);
        }
    });
};
