const path = require("path");
const fs = require("fs");
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

let vuelosController = {
    index: (req, res) => {
        res.render(path.resolve(__dirname, "../views/vuelos.ejs"), {
            vuelos: products,
        });
    },

    search: (req, res) => {
        let search = req.query.q;

        let vuelosFiltrado = products.filter(
            (vuelo) =>
                vuelo.destino.toLowerCase().includes(search.toLowerCase()) ||
                vuelo.precio.toString().toLowerCase().includes(search.toLowerCase())
        );

        res.render(path.resolve(__dirname, "../views/vuelos.ejs"), {
            vuelos: vuelosFiltrado,
        });
    },
};

module.exports = vuelosController;
