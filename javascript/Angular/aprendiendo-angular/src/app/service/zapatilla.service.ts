import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService {
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla("Reebok Classic", "Reebok", "Blanco", 100, true),
      new Zapatilla("Nike Runner", "Nike", "Negro", 80, true),
      new Zapatilla("Adidas Classic", "Adidas", "Gris", 60, true),
      new Zapatilla("Nike Casual", "Nike", "blanco", 120, false)
    ];
  }
  getZapatillas(): Array<Zapatilla> {
    return this.zapatillas;
  }
}
