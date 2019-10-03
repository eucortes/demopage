interface CamisetaBase {
    setColor(newColor)
    getColor()
}
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
//let capu = new Sudadera();
//capu.setCapucha(true)
//console.log(capu)