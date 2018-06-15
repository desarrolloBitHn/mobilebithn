import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalleAlojamientosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-alojamientos',
  templateUrl: 'detalle-alojamientos.html',
})
export class DetalleAlojamientosPage {
item;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {

    console.log(this.item);


    console.log('ionViewDidLoad DetalleAlojamientosPage');
  }

}
