import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, DoCheck {
  titulo: string = "Cursos"
  constructor() {
    titulo: "Cursos"

  }
  cambiarTitulo(): void {
    this.titulo = "Nuevo Titulo"
  }
  ngOnInit() {
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("dockeck ejecutado")
  }
}
