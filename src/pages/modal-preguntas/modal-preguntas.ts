import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

/**
 * Generated class for the ModalPreguntasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-preguntas',
  templateUrl: 'modal-preguntas.html',
})
export class ModalPreguntasPage {
item;
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
  }

  cerrar() {
   // let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss();
 }

  ionViewDidLoad() {
    console.log(this.item);
    console.log('ionViewDidLoad ModalPreguntasPage');
  }

}
