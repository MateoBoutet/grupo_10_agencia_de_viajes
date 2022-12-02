const express = require('express');

const app =  express ();
// Modulo nativo para manejar las rutas de los archivos
const path = require('path');

app.use(express.static("./public"));

app.listen(3000,()=>{
    console.log ('servidor corriendo');
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});
