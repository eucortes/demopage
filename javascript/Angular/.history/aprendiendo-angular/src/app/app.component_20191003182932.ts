import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bienvenido a aprendiendo-angular';
  public mostrar_cursos: boolean = true
  ocultarCursos() {
    this.mostrar_cursos = !this.mostrar_cursos
  }

}
