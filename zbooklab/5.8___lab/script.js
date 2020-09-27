var isStrongPassword = (params) => {
    var strongPas = true;
    // console.log(typeof(params));
    if(params.length<8){
        console.log("length");
        strongPas = false;
    }

    if(params.indexOf("password")!=-1){
        console.log("pass");
        strongPas = false;
    }
    var containUppercase = false;
    for(let index = 0; index<params.length;index++){
        if(params.charCodeAt(index)>=65 && params.charCodeAt(index)<=90){
            containUppercase = true;
        }
    }

    if(!containUppercase){
        console.log("upper");
        strongPas = false;
    }


    


    return strongPas;
}


