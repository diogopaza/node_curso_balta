const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const router = express.Router();

//carrega rotas
const indexRoutes = require('./routes/index.js')
const product = require('./routes/products')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))




app.use('/',indexRoutes);
app.use('/products',product);

module.exports = app;