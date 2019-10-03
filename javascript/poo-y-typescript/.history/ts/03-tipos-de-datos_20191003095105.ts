//string
let cadena: string = "Edgar"
let numero: number = 34
let booleano: boolean = true
let cualquiera: any = "hola"
cualquiera = 5
let lenguajes: Array<string> = ['hola', 'adios']

class camiseta {
    private color: string;
    public setColor(newColor: string) {
        this.color = newColor;
    };
    public getColor(): string {
        return this.color
    }

}

