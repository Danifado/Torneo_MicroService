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
  console.log("test");
  const [numPlayers, idTematica, numPreguntas] = req.body;
  const values = [tmpCod, numPlayers, idTematica, numPreguntas, null, 1];
  const sqlQuery = 'INSERT INTO fact_salas (id_sala, num_players, id_tematica, num_preguntas, End_time, Is_Active) VALUES ($1, $2, $3, $4, $5, $6)'
  await dbcon.query(sqlQuery, values);
  res.json({ message: "Torneo Creado" }); 
  
});
app.post('/preguntas_json', async function (req, res)  {
  const {idUsuario, idTorneo, jsonPregunta} = req.body;
  const sqlQuery = 'INSERT INTO json_preguntas (json_pregunta, id_usuario, id_torneo) VALUES ($1, $2, $3)';
  const value_tmp = JSON.stringify(jsonPregunta);
  const values = [value_tmp, idUsuario, idTorneo];
  await dbcon.query(sqlQuery, values);
  res.json({ message: "JSON de preguntas en base" }); 

});
app.get('/tematica/:id', (req, res) => {
  const {id} = req.params;
	const tematica = pruebas.get_tematicas(id);
	res.send(tematica);
});

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