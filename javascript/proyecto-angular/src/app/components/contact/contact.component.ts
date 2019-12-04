import { Component, OnInit, ViewChild } from "@angular/core";
//import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public anchuraToSlider: any;
  public existe: boolean;
  public autorObject: any;
  @ViewChild("textos", { static: true }) eltexto;
  constructor() {}

  ngOnInit() {
    let opcionclasica = document.querySelector("#texto").innerHTML;
    console.log(opcionclasica);
    console.log(this.eltexto.nativeElement.textContent);
  }
  cargarSlider() {
    let anchoLocal: number;
    this.existe = false;
    anchoLocal = this.widthSlider;
    this.widthSlider = undefined;
    this.anchuraToSlider = false;
    this.widthSlider = anchoLocal;
    this.anchuraToSlider = this.widthSlider;
    this.existe = true;
  }
  autor(event) {
    this.autorObject = event;
  }
}
