"use strict";

const express = require('express')
var path = require('path');
var module_functions = require('./public/javascripts/module_functions');
// var callsRouter = require('./routes/calls');

const app = express()
const port = 3000

// --------------- API de Pruebas --------------- //
var pruebas = require('./public/javascripts/pruebas');

// GET TEMATICAS
app.get('/topics', (req, res) => {
  if(action !== 'approve' && action !== 'reject') {
    return next(new Error('Action is neither approve or reject.'));
  }
  console.log(req.query.SUPAPA);
  res.send(pruebas.get_preguntas(req.query.id));
});
// --------------- Fin API Pruebas --------------- //


app.get('/generar_codigo', (req, res) => {
  res.send(module_functions.cod_gen());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});