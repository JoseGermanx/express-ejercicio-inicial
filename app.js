
const express = require('express');

const app = express();

const port = 8080;

// crear una ruta (taquilla del banco)

// primer parametro la funcion controladora es el requerimiendo de la peticion (req, request)
app.get('/taquilla-uno', (req, res) => res.send('Hola desde la taquilla uno') )
//             ruta                          funcion controladora

app.get('/taquilla-dos', (req, res) => res.send('Hola desde la taquilla dos') )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


