"use strict";

const express = require('express')
var path = require('path');
var module_functions = require('./public/javascripts/module_functions');
// var callsRouter = require('./routes/calls');
const dbcon = require('./dbcon');
const app = express();
const port = 3000;
app.use(express.json())
// --------------- API de Pruebas --------------- //
var pruebas = require('./public/javascripts/pruebas');

// GET TEMATICAS
var tmpCod 
app.get('/crear_torneo', (req, res) => {
  // console.log(dbcon.connect());
  res.send(dbcon.connect());
});


app.post('/torneo', async function(req, res) {
  tmpCod = module_functions.cod_gen();
  const { Num_players, Id_tematica, Nombre_Tematica } = req.body;

  console.log("a")
  const value1 = tmpCod;
  const value2 = Num_players;
  const value3 = Id_tematica;
  const value4 = Nombre_Tematica
  const value7 = null;
  const value8 = 1;
  const values = [value1, value2, value3, value4, value7, value8];
  await dbcon.query('INSERT INTO fact_salas (Id_sala, Num_players, Id_tematica, Nombre_Tematica, End_time, Is_Active) VALUES ($1, $2, $3, $4, $5, $6)', values);
  res.json({ message: "torneo creadisimo" }); //acaba la funcion,
  
});//funciona
app.post('/preguntas_json', async function (req, res)  {
  
  const value1 = req.body;

  const sql = 'INSERT INTO json_preguntas (json_pregunta) VALUES ($1)';
  const value_tmp = JSON.stringify(value1);
  const values = [value_tmp];

  await dbcon.query(sql, values);
  
  res.json({ message: "json de preguntas en base" }); 
  
});
app.get('/tematica/:id', (req, res) => {
  const {id} = req.params;
	const tematica = pruebas.get_tematicas(id);
  console.log(typeof(id));
	res.send(tematica);
});//funciona

app.get('/preguntas/:tematica/:numero', (req, res) =>{
  const {tematica} = req.params;
	var {numero} = req.params;
	numero = parseInt(numero)
	const json_preguntas = pruebas.get_preguntas(tematica);
	const preguntas_shuffled = module_functions.shuffleJSON(json_preguntas);
	var preguntas_finales = preguntas_shuffled.slice(0, numero)
	res.send(preguntas_finales);
}); //funciona
// --------------- Fin API Pruebas --------------- //


app.get('/generar_codigo', (req, res) => {
  res.send(module_functions.cod_gen());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});