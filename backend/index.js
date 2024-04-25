import express from 'express'
import router from './routes/index.js'
import cors from 'cors'
import { conection } from './database.js';

const app = express();

const port = 3000;

conection.connect( (error) =>{
    if(error){
        throw error;
    } else{
        console.log('Succesfully conected!')
    }
});


app.use(cors())
app.use(router);

app.listen(port, () =>
    console.log(`Server listen on port ${port}`)
);

