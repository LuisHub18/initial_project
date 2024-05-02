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

export const getClientById = (req, res) => {
    const id = req.params.id;
    conection.query('select * from clientes where id = ?;', [id], (error, filas) => {
        if(error){
            throw error;
        } else {
            console.log('¡All Well!');
            res.send(filas);
        }
    });
};

export const createClient = (req, res) => {
    const {id, nombre, apellido, direccion, telefono, curp, rfc, codigo_postal} = req.body;
    conection.query('INSERT INTO clientes (id, nombre, apellido, direccion, telefono, curp, rfc, codigo_postal) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [id, nombre, apellido, direccion, telefono, curp, rfc, codigo_postal], (error, filas) => {
        if(error) {
            console.error('Error creating client:', error);
            res.status(500).send('Error creating client');
        } else {
            console.log('Client created successfully');
            res.status(201).send('Client created');
        }
    });
};

export const updateClient = (req, res) => {
    const id = req.params.id;
    const updatedClient = req.body;
    conection.query('update clientes set ? where id = ?;', [updatedClient, id], (error, filas) => {
        if(error){
            throw error;
        } else {
            console.log('¡All Well!');
            res.send('Client updated');
        }
    });
}

export const deleteClient = (req, res) => {
    const id = req.params.id;
    conection.query('delete from clientes where id = ?;', [id], (error, filas) => {
        if(error){
            throw error;
        } else {
            console.log('¡All Well!');
            res.send('Client deleted');
        }
    }); 
}