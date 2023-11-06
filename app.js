const express = require("express");

const app = express();

const port = 8080;

// crear una ruta (taquilla del banco)

app.use((req, res, next) => {
  console.log(`De paso por este middleware el ${new Date()}`);
  next();
});

// autenticacion basica
app.use((req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    res.status(401).json({
      msg: "Autorizacion requerida",
    });
  } else {
    next();
  }
});

// primer parametro la funcion controladora es el requerimiendo de la peticion (req, request)
app.get("/taquilla-uno", (req, res) => res.send("Hola desde la taquilla uno"));
//             ruta                          funcion controladora

app.get("/taquilla-dos", (req, res) => res.send("Hola desde la taquilla dos"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
