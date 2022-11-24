const express = require('express');
const app =  express ();
// Modulo nativo para manejar las rutas de los archivos
const path = require('path');

app.listen(3000,()=>{
    console.log ('servidor corriendo');
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./src/views/index.html"))
});

const publicPath = path.resolve(__dirname,"./public");

app.use(express.static(publicPath));