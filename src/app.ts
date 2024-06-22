import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express();

//Permite analizar los cuerpos de las solicitudes entrantes con formato json
 app.use(express.json());

/*
 indica que deseas permitir el intercambio de credenciales 
 (como cookies, autenticación HTTP básica o tokens de autorización) 
 entre diferentes dominios. 
*/
 app.use(cors({ credentials: true }));

const PUERTO = process.env.PUERTO || 3000;

app.listen(PUERTO, () => {
    console.log("conectado al puerto: " + PUERTO);
})
