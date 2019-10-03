'use strict'

var bicicleta = {
    color: "rojo",
    modelo: "BMX",
    frenos: "de disco",
    velocidadMaxima: '60km',
    cambiaColor: function (nuevo_color) {
        this.color = nuevo_color
    }
};
bicicleta.cambiaColor('azul')
console.log(bicicleta)