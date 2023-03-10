const path = require("path");
const fs = require("fs");
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

let alojamientoController = {
    index: (req, res) => {
        res.render(path.resolve(__dirname, "../views/alojamiento.ejs"), {
            alojamientos: products,
        });
    },

    search: (req, res) => {
        let search = req.query.q;

        let alojamientosFiltrado = products.filter(
            (alojamiento) =>
                alojamiento.destino.toLowerCase().includes(search.toLowerCase()) ||
                alojamiento.precio.toString().toLowerCase().includes(search.toLowerCase())
        );

        res.render(path.resolve(__dirname, "../views/alojamiento.ejs"), {
            alojamientos: alojamientosFiltrado,
        });
    },
};

module.exports = alojamientoController;
