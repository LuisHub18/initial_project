import {Request, Response} from 'express';
import {QueryResult} from 'mariadb';

export const index = (req, res) => {
    res.json({message: 'Hello world'});
}

export const getClients = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM client;');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Unexpected error');
    }
}
