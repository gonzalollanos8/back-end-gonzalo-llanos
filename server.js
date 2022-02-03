const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const contenedor= require('./index');
const prodContenedor= new contenedor();
const routerProducto = express.Router();

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static('public'));
app.use('/api/products', routerProducto);
routerProducto.use(express.json());




routerProducto.get('/products', (req, res, next) => {
    let productsList= prodContenedor.getAll();
    res.send(productsList);
    next();
});

    routerProducto.get('/:id', (req, res) => {
        let parId = req.params.id;
        res.send(`haz seleccionado el producto: ${parId}`);
    });
    
    routerProducto.post('/guardar',(req,res)=>{
        let parTitle=req.body.title;
        let parPrice=req.body.price;
        let parThumbnail=req.body.thumbnail;
        let idProducts= objContenedor.agregarProducto(req.body.title,req.body.price);
        res.send(`El producto ${parNombre} se ha guardado con el id: ${idProducts}`);
        res.json({code:200, data:`Producto ${parNombre} agregado con exito`});
    });
    routerProducto.put('./',(req,res)=>{
        res.send('modificar datos');
    });
    routerProducto.delete('./',(req,res)=>{
        res.send('eliminar datos');
    });

    const PORT= 8080;
const server = app.listen(PORT, () => {
    console.log(`servidor http escuchando en el puerto: ${PORT}`);
});

server.on('error', error =>(`Error en servidor ${error}`));
