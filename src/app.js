const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const methodOverride = require("method-override");
const app = express();
const path = require('path')

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

let rutasIndex = require("./routes/index.js");
let rutasLogin = require("./routes/login.js");
let rutasRegister = require("./routes/register.js");
let rutasUserProfile = require("./routes/userProfile.js");
let rutasProductCart = require("./routes/productCart.js");
/*let rutasProductDetail = require('./routes/productDetail.js'); */
let rutasSession = require("./routes/session.js");
let rutaProducto = require("./routes/productoRoute");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.use(morgan("dev"));
app.use(express.json());
app.use(session({ secret: "secreto!!" }));

app.listen(3000, () => {
    console.log('server running in http://localhost:3000"');
});

app.use("/", rutasIndex);
app.use("/login", rutasLogin);
app.use("/register", rutasRegister);
app.use("/userProfile", rutasUserProfile);
app.use("/productCart", rutasProductCart);
/* app.use('/productDetail', rutasProductDetail); */
app.use("/session", rutasSession);
app.use("/paquetes", rutaProducto);//<---------
