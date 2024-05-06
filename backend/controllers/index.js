import { conection } from '../database.js';


export const getClients = (req, res) => {
    conection.query('select * from clientes;', (error, filas) => {
        if(error){
            console.error('Error getting clients:', error);
            res.status(500).send('Error getting clients');
        } else {
            console.log('Fetching clients...');
            res.status(201).json({message : 'Clients fetched succesfully', clients: filas});
        }
    });
};

export const getClientById = (req, res) => {
    const id = req.params.id;
    conection.query('select * from clientes where id = ?;', [id], (error, filas) => {
        if(error){
            console.error('Error getting client:', error);
            res.status(500).send('Error getting client');
        } else {
            console.log('Fetching client...');
            es.status(201).json({message : 'Client fetched succesfully', clients: filas});
        }
    });
};

export const createClient = (req, res) => {
    const client = req.body;
    conection.query('INSERT INTO clientes SET ?;', client, (error, filas) => {
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
        if(error) {
            console.error('Error updating client:', error);
            res.status(500).send('Error updating client');
        } else {
            console.log('Client updated successfully');
            res.status(201).send('Client updated');
        }
    });
}

export const deleteClient = (req, res) => {
    const id = req.params.id;
    conection.query('delete from clientes where id = ?;', [id], (error, filas) => {
        if(error) {
            console.error('Error deleting client:', error);
            res.status(500).send('Error deleting client');
        } else {
            console.log('Client deleted successfully');
            res.status(201).send('Client deleted');
        }
    }); 
}