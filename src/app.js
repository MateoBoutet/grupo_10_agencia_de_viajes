const express = require('express');
const morgan = require('morgan');
const session = require ('express-session');
const app =  express ();

app.set('view engine', 'ejs');

let rutasIndex = require('./routes/index.js');
let rutasLogin = require('./routes/login.js');
let rutasRegister = require('./routes/register.js');
let rutasProductCart = require('./routes/productCart.js');
let rutasProductDetail = require('./routes/productDetail.js');
let rutasSession = require('./routes/session.js');
let rutaFormCarga = require('./routes/formCargaRoute.js');
let rutaModifProduc = require('./routes/modifProducRoutes.js');
let rutasUserProfile = require('./routes/userProfile.js');


app.use(express.urlencoded({extended:false}));
app.use(express.static("./public"));
app.use (morgan('dev'));
app.use(express.json());
app.use(session({
    secret:"secret",
    resave: false,
    saveUninitialized:false,
}));

app.listen(3000,()=>{
    console.log ('server running in http://localhost:3000"');
});

app.use('/', rutasIndex);
app.use('/login', rutasLogin);
app.use('/register', rutasRegister);
app.use('/productCart', rutasProductCart);
app.use('/productDetail', rutasProductDetail);
app.use('/session', rutasSession);
app.use('/formCarga', rutaFormCarga);
app.use('/modifProducto', rutaModifProduc);
app.use('/userProfile', rutasUserProfile);