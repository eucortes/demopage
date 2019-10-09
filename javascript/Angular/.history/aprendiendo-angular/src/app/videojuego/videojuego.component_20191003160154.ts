import { Component } from '@angular/core'

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent {
    public titulo: string
    public listado: string
    constructor() {
        this.titulo = "Componente de Videojuegos"
        console.log('se ha cargado el videojuego.component.ts')
    }
}