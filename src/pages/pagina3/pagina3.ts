import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-pagina3",
  templateUrl: "pagina3.html"
})
export class Pagina3Page {
  mutante: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);
    this.mutante = this.navParams.get("mutante");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad Pagina3Page");
  }

  irAtras() {
    this.navCtrl.pop();
  }

  irRoot() {
    this.navCtrl.popToRoot();
  }
}
