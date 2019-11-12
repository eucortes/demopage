import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;
  constructor() {
    this.title = "Edgar Cortés";
    this.subtitle = "Administrador de Proyectos y desarrollador";
    this.email = "eu.cortes@gmail.com";
  }
  ngOnInit() {}
}
