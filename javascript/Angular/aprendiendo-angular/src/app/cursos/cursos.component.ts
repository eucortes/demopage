import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";

@Component({
  selector: "app-cursos",
  templateUrl: "./cursos.component.html",
  styleUrls: ["./cursos.component.css"]
})
export class CursosComponent implements OnInit, DoCheck, OnDestroy {
  titulo: string = "Cursos";
  public nombre: string;

  constructor(private _route: ActivatedRoute, private _router: Router) {
    titulo: "Cursos";
  }
  cambiarTitulo(): void {
    this.titulo = "Nuevo Titulo";
  }
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      if (params.nombre !== undefined) {
        this.nombre = params.nombre;
      }
      if (params.apellidos !== undefined) {
        this.nombre = this.nombre + " " + params.apellidos;
      }
      if (this.nombre !== undefined) {
        if (this.nombre == "ninguno") {
          this._router.navigate(["/home"]);
        }
        this.titulo = "Bienvenido " + this.nombre;
      }

      console.log(this.nombre);
    });
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    //  console.log("docheck ejecutado")
  }
  ngOnDestroy() {
    //  console.log("onDestroy Ejecutado")
  }
  redirigir() {
    this._router.navigate(["/zapatillas"]);
  }
}
