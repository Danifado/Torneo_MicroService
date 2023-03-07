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


app.post('/torneo', (req, res) => {
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

app.get('/tematica/:id', (req, res) => {
  const {id} = req.params;
	const tematica = pruebas.get_tematicas();
	res.send(module_functions.findTematica(tematica, id));
	console.log(tematica);});

app.get('/preguntas/:tematica/:numero', (req, res) =>{
  const {tematica} = req.params;
	var {numero} = req.params;
	numero = parseInt(numero)
	const json_preguntas = pruebas.get_preguntas(tematica);
	const preguntas_shuffled = module_functions.shuffleJSON(json_preguntas);
	var preguntas_finales = preguntas_shuffled.slice(0, numero)
	res.send(preguntas_finales);
}); 
// --------------- Fin API Pruebas --------------- //


app.get('/generar_codigo', (req, res) => {
  res.send(module_functions.cod_gen());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});