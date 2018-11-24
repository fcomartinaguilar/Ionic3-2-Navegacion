import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, MenuController } from "ionic-angular";
import { Pagina2Page } from "../pagina2/pagina2";

@IonicPage()
@Component({
  selector: "page-principal",
  templateUrl: "principal.html"
})
export class PrincipalPage {
  pagina2: any = Pagina2Page;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController) { }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PrincipalPage");
  }

  navegarPagina() {
    this.navCtrl.push(Pagina2Page);
  }

  mostrarMenu() {
    this.menuCtrl.toggle();
  }
}
