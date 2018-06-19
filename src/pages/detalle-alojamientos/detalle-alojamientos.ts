import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Nav } from 'ionic-angular';

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
  constructor( public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public nav: Nav) {
    this.item = navParams.get('item');
  }

  preguntas(_item){
    const modal = this.modalCtrl.create('ModalPreguntasPage', { item: _item });
    modal.present();
  }

  Inicio(){
    this.nav.setRoot('InicioPage');
  }

  ionViewDidLoad() {

    console.log(this.item);


    console.log('ionViewDidLoad DetalleAlojamientosPage');
  }

}
