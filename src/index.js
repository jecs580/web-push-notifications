require('dotenv').config();
const express = require('express');
const morgan =require('morgan');
const routes = require('./routes/index')
const path = require('path')
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))  //Para que express pueda entender los datos que son enviados por un formulario
app.use(express.json());
// Routes
app.use(routes);

// Static Content
app.use(express.static(path.join(__dirname,'public')))

app.listen(5000,()=>console.log('Servidor en puerto 5000'))