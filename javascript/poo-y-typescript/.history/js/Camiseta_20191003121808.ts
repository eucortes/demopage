interface CamisetaBase {
    setColor(newColor)
    getColor()
}


//DEcorador
function estampar(target: Function) {
    target.prototype.estampado = function (): void {
        console.log("Camiseta Estampada con el logo de:")// + logo)
    }
}


@estampar()
class Camiseta implements CamisetaBase {
    private color: string;
    private modelo: string
    private marca: string
    private talla: string
    private precio: number

    constructor(color = "", modelo = "", marca = "", talla = "", precio = 0) {
        console.log("camiseta nueva creada")
    }
    public setColor(newColor: string) {
        this.color = newColor;
    };
    public getColor(): string {
        return this.color;
    }
}
//clase hija
class Sudadera extends Camiseta {
    public capucha: boolean
    setCapucha(capucha: boolean) {
        this.capucha = capucha
    }
    public getCapucha() {
        return this.capucha
    }
}

let cami = new Camiseta()
console.log(cami)
//cami.estampado()
let capu = new Sudadera();
capu.setCapucha(true)
console.log(capu)
//capu.estampado();