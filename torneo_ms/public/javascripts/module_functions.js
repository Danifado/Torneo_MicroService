
const Request = require('tedious').Request
import {getConnection}  from "./dbcon";
const TYPES = require('tedious').TYPES
module.exports = {
    cod_gen: function () {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVW1234567890';
        const cod_len = 6;
        var code = "";

        for (var i = 0; i <= cod_len;i++){
            var random_char = Math.floor(Math.random() * chars.length);
            code += chars.substring(random_char, random_char+1)
        };
        return(code);
    },
    //code_gen va a generar un codigo aleatorio de 6 caracteres con numeros en mayuscula y letras.
    
    inicio_queue: function () {
        let date_ob = new Date()
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        let seconds = date_ob.getSeconds();
        if (minutes < 10){
            minutes = "0"+minutes
        };
        const real_hour = hours+":"+minutes+":"+seconds; //la hora se devuelve en formato date "hh:mm:ss"
        return(real_hour);
    },
    // inicio_queue es la función que recibe la hora en tiempo real que se crea el torneo y empieza un queue
    // que abre la sala para que la gente se conecte al torneo.
    
    final_queue: function () {
        let date_ob = new Date()
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        let seconds = date_ob.getSeconds();
        if (minutes < 10){
            minutes = "0"+minutes
        };
        minutes = minutes+10;
        const real_hour = hours+":"+minutes+":"+seconds;
        return(real_hour);
    },
    // final_queue es la función que muestra que en 10 minutos pasados del incio_queue finaliza la cola del torneo y
    // este ya no va a estar abierto.
    insert_Torneo: function (value1, value2, value3 ,value4, value7, value8) {

        const connection = getConnection();
        const request = new Request("INSERT INTO Fact_Salas (Id_sala, Num_players, Id_tematica, Nombre_Tematica, End_time, Is_Active) VALUES (@value1, @value2, @value3, @value4, @value7, @value8)", (err, rowCount) => {
          if (err) {
            console.log(err)
          } else {
            console.log(`${rowCount} rows`)
          }
          connection.close()
        })
        request.on('error', (err) => {
          console.log(err)
        })
      
        request.addParameter("Id_sala", TYPES.VarChar, value1);
        request.addParameter("Num_players", TYPES.int, value2);
        request.addParameter("Id_tematica", TYPES.VarChar, value3);
        request.addParameter("Nombre_tematica", TYPES.VarChar, value4);
        request.addParameter("End_time", TYPES.VarChar, value7);
        request.addParameter("Is_Active", TYPES.Null, value8);
      
        connection.execSql(request)
    },
    //insert_Torneo funcion que inserta 
    shuffleJSON: function (jason) {
      for (var i = 0; i < jason.length - 1; i++) {
          var j = i + Math.floor(Math.random() * (jason.length - i));
  
          var temp = jason[j];
          jason[j] = jason[i];
          jason[i] = temp;
      }
      return jason;
    },
    //funcion que revuelve un json
    findTematica: function(tematicas, id){
      var tematica_info;
      tematicas.forEach(tem => {
        if(tem._id == id){
            tematica_info =  tem.name
        }
        else{
            tematica_info =  "No encontrado"
        }
    })
    //funcion que encuentra tematica basada en su id
    return tematica_info;
    },
    findPreguntas: function(){
      var jsonArr = []
          
          for (var i = 0; i < questions.length; i++){
              if (questions[i].theme == _theme){
                  jsonArr.push({
                      question: questions[i].question,
                      answer: questions[i].answers
                  });
              }
          }
          return jsonArr;
    }
    //funcion que busca las preguntas dado el nombre de un tema
}
