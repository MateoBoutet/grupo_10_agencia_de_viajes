const express = require('express');

const app =  express ();
// Modulo nativo para manejar las rutas de los archivos
const path = require('path');

app.use(express.static("./public"));

app.listen(3000,()=>{
    console.log ('servidor corriendo en el http://localhost:3000"');
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});

app.get("/session.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/session.html"))
});

app.get("/register.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get("/login.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});