import { Component } from '@angular/core'

@Component({
    selector: 'videojuego',
    template: `
    <h2>Componente de VideoJuegos</h2>
        <ul> <li>GTA</li>
            <li>GTA</li>
            <li>Prince of Persia</li>
            <li>Tekken</li>
            <li>Mario</li>
        </ul>
    `
})
export class VideojuegoComponent {
    constructor() {
        console.log('se ha cargado el videojuego.component.ts')
    }
}