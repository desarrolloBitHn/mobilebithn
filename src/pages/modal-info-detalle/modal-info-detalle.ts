import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalInfoDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-info-detalle',
  templateUrl: 'modal-info-detalle.html',
})
export class ModalInfoDetallePage {
item;
tipoInfo;
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
  }

  cerrar() {
   // let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss();
 }

 onSegmentChange(valor){}

  ionViewDidLoad() {
    console.log(this.item);
  }

}
