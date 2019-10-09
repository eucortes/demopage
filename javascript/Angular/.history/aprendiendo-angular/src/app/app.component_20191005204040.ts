import { Component } from '@angular/core';
import { Configuracion } from "./models/configuracion"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bienvenido a aprendiendo-angular';
  public descripcion: string
  public mostrar_cursos: boolean = true
  constructor() {
    this.title = Configuracion.titulo
    this.descripcion = Configuracion.descripcion
  }




  ocultarCursos() {
    this.mostrar_cursos = !this.mostrar_cursos
  }
}
