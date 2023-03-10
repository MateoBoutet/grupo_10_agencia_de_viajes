const path = require("path");
const fs = require("fs");
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

let indexController = {
    index: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        res.render(path.resolve(__dirname, "./../views/index.ejs"), {
            paquetes: products,
        });
    },

    search: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        let search = req.query.q;

        let productsFound = products.filter(
            (product) =>
                product.destino.toLowerCase().includes(search.toLowerCase()) ||
                product.precio.toString().toLowerCase().includes(search.toLowerCase())
        );
        res.render(path.resolve(__dirname, "./../views/index.ejs"), {
            paquetes: productsFound,
        });
    },
};

module.exports = indexController;
