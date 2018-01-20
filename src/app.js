const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conecta banco
mongoose.connect('mongodb://balta:balta@ds261247.mlab.com:61247/ndstr');

//carrega modelos
const Product = require('./models/product')
//carrega rotas
const indexRoutes = require('./routes/index.js')
const product = require('./routes/products')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))




app.use('/',indexRoutes);
app.use('/products',product);

module.exports = app;