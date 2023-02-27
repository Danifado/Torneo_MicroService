"use strict";

const express = require('express')
var path = require('path');
var module_functions = require('./public/javascripts/module_functions');
// var callsRouter = require('./routes/calls');
const dbcon = require('./dbcon');
const app = express();
const port = 3000;

// --------------- API de Pruebas --------------- //
var pruebas = require('./public/javascripts/pruebas');

// GET TEMATICAS
var tmpCod 
app.get('/crear_torneo', (req, res) => {
  // console.log(dbcon.connect());
  res.send(dbcon.connect());
});

app.get('/get_preguntas', (req, res) => {
  console.log(module_functions.cod_gen())
  res.send(pruebas.get_tematicas(req.query.id));
});
// --------------- Fin API Pruebas --------------- //


app.get('/generar_codigo', (req, res) => {
  res.send(module_functions.cod_gen());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});