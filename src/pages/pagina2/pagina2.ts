import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Pagina3Page } from "../pagina3/pagina3";

@IonicPage()
@Component({
  selector: "page-pagina2",
  templateUrl: "pagina2.html"
})
export class Pagina2Page {
  pagina3: any = Pagina3Page;

  mutantes: any[] = [
    {
      nombre: "Magneto",
      poder: "Controlar metales"
    },
    {
      nombre: "Wolverine",
      poder: "Regeneracion acelerada"
    },
    {
      nombre: "Profeson X",
      poder: "Poderes psiquicos"
    },
    {
      nombre: "Gambito",
      poder: "Vargar energia en objetos"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad Pagina2Page");
  }

  irPagina3(mutante: any) {
    console.log(mutante);
    this.navCtrl.push(Pagina3Page, { mutante: mutante });
  }
}
