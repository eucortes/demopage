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
        this.listado = "listado de los juegos mas populares"
        // console.log('se ha cargado el videojuego.component.ts')
    }
}