function cod_gen(){
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVW1234567890';
    const cod_len = 6;
    var code = "";

    for (var i = 0; i <= cod_len;i++){
        var random_char = Math.floor(Math.random() * chars.length);
        code += chars.substring(random_char, random_char+1)
    };
    return(code);
};

function inicio_queue(){
    const hora = ""
    let date_ob = new Date()
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    if (minutes < 10){
        minutes = "0"+minutes
    };
    const real_hour = hours+":"+minutes+":"+seconds;
    return(real_hour);
};

function final_queue(){
    const hora = ""
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
};
