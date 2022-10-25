const logger = require('./logger')

function division(a,b){
    if (b!=0){
        return a/b;
    }
    throw new Error("No se puede dividir por cero")    
}

const num1=3
const num2=0

try {
    logger.log(division(num1, num2))
}
catch(e){
    logger.error("No es posible realizar esta division")
}