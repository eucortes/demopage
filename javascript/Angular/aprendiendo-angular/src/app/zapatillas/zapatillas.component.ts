import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component({
  selector: "zapatillas",
  templateUrl: "./zapatillas.component.html"
})
export class ZapatillasComponent implements OnInit {
  public titulo: string = "Componente de Zapatillas";
  public zapatillas: Array<Zapatilla>;
  public marcas: string[];
  public color: string;
  public mi_marca: string;
  constructor() {
    this.color = "orange";
    this.marcas = new Array();
    this.zapatillas = [
      new Zapatilla("Reebok Classic", "Reebok", "Blanco", 100, true),
      new Zapatilla("Nike Runner", "Nike", "Negro", 80, true),
      new Zapatilla("Adidas Clasic", "Adidas", "Gris", 60, true),
      new Zapatilla("Nike Casual", "Nike", "blanco", 80, false)
    ];
  }
  ngOnInit() {
    console.log(this.zapatillas);
    this.getMarcas();
  }
  getMarcas() {
    this.zapatillas.forEach((value, index) => {
      if (this.marcas.indexOf(value.marca) < 0) {
        this.marcas.push(value.marca);
      }
      console.log(this.marcas);
    });
  }
  getMarca() {
    if (this.marcas.indexOf(this.mi_marca) < 0 && this.mi_marca != "") {
      this.marcas.push(this.mi_marca);
    }
    this.mi_marca = "";
  }
  deleteMarca(indice) {
    // delete this.marcas[indice];
    this.marcas.splice(indice, 1);
  }
}
