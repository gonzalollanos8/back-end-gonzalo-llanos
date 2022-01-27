const express = require('express');
const PORT= 8080;

const contenedor= require('./index');
const prodContenedor= new contenedor();

const app = express();


app.get('/products', (req, res) => {
    let productsList= prodContenedor.getAll();
    res.send(productsList);
});
app.get('/productRandom',(req,res)=>{
    let product= prodContenedor.getById.math.random(req.query.id);
    res.send(`${product.title}has seleccionado`);
    });
    // let selectRandomId= (length) => {
    //     let id= math.random(length); 
    //     for (let i = 0; i < length; i++ ) {
    //       id += characters.charAt(Math.floor(Math.random() * characters.length));
    //    }
    //    return id;
    // }


const server = app.listen(PORT, () => {
    console.log(`servidor http escuchando en el puerto: ${server.address().port}`);
});

server.on('error', error =>(`Error en servidor ${error}`));
