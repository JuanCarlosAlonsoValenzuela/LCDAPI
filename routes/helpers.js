const joi = require('@hapi/joi');

const regexN = new RegExp("^[0123456789]{1,}$");

const schemaEntrada = joi.object({
    t: joi.number().integer().min(0).required(),
    n: joi.string().pattern(regexN).required()

})

module.exports = {

    validarEntrada(entrada){
    
        let nInputs = entrada.length;
        for(let i = 0; i < nInputs; i++){
            // Validamos la entrada
            let {error} = schemaEntrada.validate(entrada[i]);
            if(error){
                throw error.details[0].message;
            }
        }
    },

    primeraLinea(t, n){
        if(n==1){
            return "\xa0\xa0";
        }else if(n==4){
            return "\xa0".repeat(2+t);
        }else{
            return "\xa0" + "-".repeat(t) + "\xa0";
        }
    },

    segundaLinea(t, n){
        if(n==1){
            return "|\xa0";
        }else if(n==5||n==6){
            return "|" + "\xa0".repeat(t) + "\xa0";
        }else if(n==2||n==3||n==7){
            return "\xa0".repeat(t+1) + "|";  
        }else{
            return "|" + "\xa0".repeat(t) + "|";
        }
    },

    terceraLinea(t, n){
        if(n==1){
            return "\xa0\xa0";
        }else if(n==7 || n==0){
            return "\xa0".repeat(t+2);
        }else{
            return "\xa0" + "-".repeat(t) + "\xa0";
        }
    },

    cuartaLinea(t, n){
        if(n==1){
            return "|\xa0";
        }else if(n==2){
            return "|" + "\xa0".repeat(t) + "\xa0";
        }else if(n==6 || n==8 || n==0){
            return "|" + "\xa0".repeat(t) + "|";
        }else{
            return "\xa0".repeat(t+1) + "|";  
        }
    },

    quintaLinea(t, n){
        if(n==1){
            return "\xa0\xa0";
        }else if(n==4 || n==7){
            return "\xa0".repeat(t+2);
        }else{
            return "\xa0" + "-".repeat(t) + "\xa0";
        }
    }

    
   
}