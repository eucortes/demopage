import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../service/zapatilla.service";

@Component({
  selector: "zapatillas",
  templateUrl: "./zapatillas.component.html",
  styleUrls: ["./zapatillas.component.css"],
  providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit {
  public titulo: string = "Componente de Zapatillas";
  public zapatillas: Array<Zapatilla>;
  public marcas: string[];
  public color: string;
  public miMarca: string;
  constructor(private _zapatillaService: ZapatillaService) {
    this.color = "orange";
    this.marcas = new Array();
  }
  ngOnInit() {
    this.zapatillas = this._zapatillaService.zapatillas;
    console.log(this.zapatillas);
    this.getMarcas();
  }
  public getMarcas() {
    this.zapatillas.forEach((value, index) => {
      if (this.marcas.indexOf(value.marca) < 0) {
        this.marcas.push(value.marca);
      }
      console.log(this.marcas);
    });
  }
  public getMarca() {
    if (this.marcas.indexOf(this.miMarca) < 0 && this.miMarca !== "") {
      this.marcas.push(this.miMarca);
    }
    this.miMarca = "";
  }
  public deleteMarca(indice) {
    // delete this.marcas[indice];
    this.marcas.splice(indice, 1);
  }
  public onBlur() {
    console.log("has salido del input");
  }
  public mostrarPalabra() {
    alert(this.miMarca);
  }
}
