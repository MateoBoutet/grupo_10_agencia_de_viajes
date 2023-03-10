//1. guardar al usuario en la db
//2. buscar al usuario que se quiere loguear por su email
//3. buscar a un usuario por su id
//4. editar la informacion de un usuario
//5. eliminar a un usuario de la db


const path = require('path');
const fs = require("fs");


const User = {
    fileName: '../users.json',

    getData: function () {
        return JSON.parse(fs.readFileSync(path.resolve(__dirname, this.fileName),'utf-8')); 
    },

    generarId: function () {
        let todosLosUsuarios = this.findAll();
        let ultimoUsuario = todosLosUsuarios.pop();
        if (ultimoUsuario){
            return ultimoUsuario.id + 1;

        }
        return 1;
      
    },

    findAll: function () {
        return this.getData();
    },

    EncuentraPorPk: function (id){
        let todosLosUsuarios = this.findAll();
        let EncontrarUsuario = todosLosUsuarios.find(unUsuario => unUsuario.id === id);
        return EncontrarUsuario;
    },

    EncontrarPorCampo: function (campo,texto) {
    let todosLosUsuarios = this.findAll();
    let EncontrarUsuario = todosLosUsuarios.find(unUsuario => unUsuario[campo] === texto);
    return EncontrarUsuario;

    },

    create: function (userData) {
        let todosLosUsuarios = this.findAll();
        let nuevoUsuario = {
            id: this.generarId(),
            ...userData
        }
        todosLosUsuarios.push(nuevoUsuario);
        fs.writeFileSync(path.resolve(__dirname, this.fileName),JSON.stringify(todosLosUsuarios,null,' '));
        return nuevoUsuario;    
    },

    delete: function (id){
        let todosLosUsuarios= this.findAll();
        let usuariosFinales = todosLosUsuarios.filter(unUsuario => unUsuario.id != id)
        fs.writeFileSync(path.resolve(__dirname, this.fileName),JSON.stringify(usuariosFinales,null,' '));
        return true; 
    },


}


module.exports = User;