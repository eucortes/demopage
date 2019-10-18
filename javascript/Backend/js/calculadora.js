"use strict"
let params = process.argv.slice(2);
let numero1 = parseFloat(params[0]);
let numero2 = parseFloat(params[1]);
//console.log(params, numero1, numero2);
let leyenda = `
la suma es ${numero1+numero2}
la resta es ${ numero1 - numero2 }
la multiplicacion es ${ numero1 * numero2 }
la división es ${ numero1 / numero2 }
`;
console.log(leyenda);