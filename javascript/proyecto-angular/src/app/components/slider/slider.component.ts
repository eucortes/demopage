import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
declare var $: any;

@Component({
  selector: "slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  @Input() anchura: number;
  @Output() getAutor = new EventEmitter();

  public autor: any;
  constructor() {
    this.autor = {
      nombre: "Edgar",
      website: "en construcción"
    };
  }

  ngOnInit() {
    $(".galeria").bxSlider({
      mode: "fade",
      captions: false,
      slideWidth: this.anchura
    });
  }
  lanzar() {
    this.getAutor.emit(this.autor);
  }
}
