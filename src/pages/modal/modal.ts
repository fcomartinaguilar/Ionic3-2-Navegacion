import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre: string = "";
  edad: number = 0;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController) {

    this.nombre = this.navParams.get('nombre');
    this.edad = this.navParams.get('edad');
    console.log(this.nombre, this.edad);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  cerrarConParametros() {
    let data = {
      nombre: "Pepito",
      edad: 19,
      coords: {
        lat: 10,
        lng: -10
      }
    };

    this.viewCtrl.dismiss(data);
  }

  cerrarSinParametros() {
    this.viewCtrl.dismiss();
  }

}
