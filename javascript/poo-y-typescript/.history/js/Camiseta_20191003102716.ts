
export class Camiseta {
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
