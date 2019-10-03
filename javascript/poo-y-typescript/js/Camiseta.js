var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//DEcorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampado = function () {
            console.log("Camiseta Estampada con el logo de:" + logo);
        };
    };
}
let Camiseta = class Camiseta {
    constructor(color = "", modelo = "", marca = "", talla = "", precio = 0) {
        console.log("camiseta nueva creada");
    }
    setColor(newColor) {
        this.color = newColor;
    }
    ;
    getColor() {
        return this.color;
    }
};
Camiseta = __decorate([
    estampar("Nike"),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
], Camiseta);
//clase hija
class Sudadera extends Camiseta {
    setCapucha(capucha) {
        this.capucha = capucha;
    }
    getCapucha() {
        return this.capucha;
    }
}
let cami = new Camiseta();
console.log(cami);
let capu = new Sudadera();
capu.setCapucha(true);
cami.estampado();
console.log(capu);
