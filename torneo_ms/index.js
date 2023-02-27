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
var tmpCod
app.post('/topics', (req, res) => {
  tmpCod = module_functions.cod_gen();
  const { Num_players, Id_tematica, Nombre_Tematica } = req.body;
  console.log(req.body)
  if (Num_players == undefined || Id_tematica == undefined || Nombre_Tematica == undefined) {
    res.status(400).json({ message: "Bad Request, fill all the things" });
  }
  const value1 = tmpCod;
  const value2 = Num_players;
  const value3 = Id_tematica;
  const value4 = Nombre_Tematica
  const value7 = null;
  const value8 = 1;
  insert_Torneo(value1, value2, value3 ,value4, value7, value8);
  res.json({ message: "torneo creadisimo" }); //acaba la funcion, se podria poner return?
  console.log(tourney);
});
app.get('/topics', (req, res) => {
  if (action !== 'approve' && action !== 'reject') {
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