const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
var products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

let productosController = {
    productos: (req, res) => {

        res.render(path.resolve(__dirname, "../views/paquetes.ejs"), {
            servicios: products,
        });
    },

    search: (req, res) => {
        let search = req.query.q;

        let servicioFiltrado = products.filter(
            (servicio) =>
            servicio.destino.toLowerCase().includes(search.toLowerCase()) ||
            servicio.precio.toString().toLowerCase().includes(search.toLowerCase())
        );

        res.render(path.resolve(__dirname, "../views/paquetes.ejs"), {
            servicios: servicioFiltrado,
        });
    },

    formCarga: (req, res) => {
        res.render(path.resolve(__dirname, "../views/formCarga.ejs"));
    },

    modifProducto: (req, res) => {
        res.render(path.resolve(__dirname, "../views/modifProducto.ejs"));
    },

    deleteView: (req, res) => {
        res.render(path.resolve(__dirname, "../views/deleteProducto.ejs"));
    },

    create: (req, res) => {
        let newProduct = {
            id: products[products.length - 1].id + 1,
            ...req.body,
            precio: Number(req.body.precio),
        };

        if (req.file) {
            newProduct.imagen = req.file.filename;
        }

        products.push(newProduct);

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect("/");
    },

    update: (req, res) => {
        let id = req.body.id;
        let findProduct = products.find((product) => product.id == id);

        if (!findProduct) {
            return res.render(path.resolve(__dirname, "../views/modifProducto.ejs"), {
                error: "Producto no encontrado",
            })
        }

        findProduct.destino = req.body.destino;
        findProduct.precio = Number(req.body.precio);
        findProduct.imagen = req.file.filename;//<---VER

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect("/");
    },

    delete: (req, res) => {
        let id = req.body.id;
        let findProduct = products.find((product) => product.id == id);

        if (!findProduct) {
            return res.render(path.resolve(__dirname, "../views/deleteProducto.ejs"), {
                error: "Producto no encontrado",
            })
        }

        products = products.filter((product) => product.id != id);

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect("/");
    },

    productDetail: (req, res) => {
        let id = req.params.id;
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        let productoFiltrado = products.find((producto) => {
            return producto.id == id;
        });

        res.render(path.resolve(__dirname, "../views/productDetail.ejs"), { producto: productoFiltrado });
    },
};

module.exports = productosController;