const express = require('express')
var path = require('path');
var module_functions = require('./public/javascripts/module_functions');
// var callsRouter = require('./routes/calls');
const app = express()
const port = 3000

app.get('/generar_', (req, res) => {
  res.send(module_functions.cod_gen());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})