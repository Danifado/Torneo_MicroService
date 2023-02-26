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
    
}
