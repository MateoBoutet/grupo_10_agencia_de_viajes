const express = require('express');

const app =  express ();

const path = require('path');

let rutasIndex = require('./routes/index.js');
let rutasLogin = require('./routes/login.js');
let rutasRegister = require('./routes/register.js');
let rutasProductCart = require('./routes/productCart.js');
let rutasProductDetail = require('./routes/productDetail.js');
let rutasSession = require('./routes/session.js');

app.use(express.static("./public"));

app.listen(3000,()=>{
    console.log ('server running in http://localhost:3000"');
});

app.use('/', rutasIndex);
app.use('/login', rutasLogin);
app.use('/register', rutasRegister);
app.use('/productCart', rutasProductCart);
app.use('/productDetail', rutasProductDetail);
app.use('/session', rutasSession);

