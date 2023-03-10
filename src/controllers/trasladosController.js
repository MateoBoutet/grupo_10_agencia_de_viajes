const path = require("path");
const fs = require("fs");
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

let trasladosController = {
    index: (req, res) => {
        res.render(path.resolve(__dirname, "../views/traslados.ejs"), {
            traslados: products,
        });
    },

    search: (req, res) => {
        let search = req.query.q;

        let trasladosFiltrado = products.filter(
            (traslado) =>
                traslado.destino.toLowerCase().includes(search.toLowerCase()) ||
                traslado.precio.toString().toLowerCase().includes(search.toLowerCase())
        );

        res.render(path.resolve(__dirname, "../views/traslados.ejs"), {
            traslados: trasladosFiltrado,
        });
    },
};

module.exports = trasladosController;
