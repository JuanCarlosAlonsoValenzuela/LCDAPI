const { Router } = require('express');
const router = Router();

const helpers = require('./helpers');
const { terceraLinea } = require('./helpers');

router.post('/numbers', (req, res) => {
    let input = req.body; // Recibimos un array

    if(!Array.isArray(input)){
        input = [input];
    }

    try{
        helpers.validarEntrada(input);
        
        let result = [];

        const nInputs = input.length;

        // Calculamos la salida para cada uno de los inputs
        for(let i=0; i< nInputs; i++){
            let r = "";
            let elemento = input[i];
            let t = elemento.t;

            nNumeros = elemento.n.length;
            let primeraLinea = "";
            let segundaLinea = "";
            let terceraLinea = "";
            let cuartaLinea = "";
            let quintaLinea = "";
            for(let j=0; j< nNumeros; j++){
                let n = Number(elemento.n[j])
                primeraLinea = primeraLinea + helpers.primeraLinea(t, n) + "\xa0";
                segundaLinea = segundaLinea + helpers.segundaLinea(t, n) + "\xa0";
                terceraLinea = terceraLinea + helpers.terceraLinea(t, n) + "\xa0";
                cuartaLinea = cuartaLinea + helpers.cuartaLinea(t, n) + "\xa0";
                quintaLinea = quintaLinea + helpers.quintaLinea(t, n) + "\xa0";
            }
            if(t>0){
                r = primeraLinea + "\n" + (segundaLinea + "\n").repeat(t) + 
                    terceraLinea + "\n" + (cuartaLinea + "\n").repeat(t) + quintaLinea;
            }
            result.push(r);
            console.log(r);

        }

        res.json(result);

    }catch(err){
        res.send(err);
    } 
})

module.exports = router;