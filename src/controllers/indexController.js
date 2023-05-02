/* const products = require('../data/models/products');

let indexController = {
  index: async (req, res) => {
    try {
      const productsFound = await products.findAll();
      res.render('index', { paquetes: productsFound });
    } catch (error) {
      console.log(error);
      res.render('error');
    }
  },
  search: async (req, res) => {
    try {
      const search = req.query.q;
      const productsFound = await products.findAll({
        where: {
          [Sequelize.Op.or]: [
            Sequelize.where(
              Sequelize.fn('lower', Sequelize.col('destino')),
              'LIKE',
              `%${search.toLowerCase()}%`
            ),
            Sequelize.where(
              Sequelize.fn('lower', Sequelize.col('precio')),
              'LIKE',
              `%${search.toLowerCase()}%`
            ),
          ],
        },
      });
      res.render('index', { paquetes: productsFound });
    } catch (error) {
      console.log(error);
      res.render('error');
    }
  },
};

module.exports = indexController; */



const path = require("path");
const fs = require("fs");
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const User = require('../data/models/User');

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
