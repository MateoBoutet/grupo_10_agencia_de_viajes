const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));




let productosController = {
    productos: (req, res) => {
        let servicioFiltrado = products.find(servicio => {
            return servicio.id;
        })

        res.render(path.resolve(__dirname, "../views/paquetes.ejs"), {servicio: servicioFiltrado});
    },

    create: (req, res) =>{
        res.render(path.resolve(__dirname, "../views/formCarga.ejs"));
    },
    
    processCreate: (req, res) => {
        res.send(req.body);
    },

    modif: (req, res) => {
        res.render(path.resolve(__dirname, '../views/modifProducto.ejs'))
    },

    edit: (req, res) => {
        let servicioFiltrado = products.find(servicio => {
            return servicio.id;
        });

        res.render(path.resolve(__dirname, "../views/modifProducto.ejs"), {servicio: servicioFiltrado});
    },

    update: (req, res) => {
        let id = req.params.id;
        let servicioFiltrado = products.find(servicio => {
            return servicio.id.toString() === id;
        })
    },

    delete: (req, res) => {
        
    },

    productDetail: (req, res) => {
        let id = req.params.id;
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let productoFiltrado = products.find(producto => {
			return producto.id == id
		})

		res.render(path.resolve(__dirname, '../views/productDetail.ejs'), {producto: productoFiltrado})
}
}

module.exports = productosController;