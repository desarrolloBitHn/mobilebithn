import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

/**
 * Generated class for the DetailsRegistroDominioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-registro-dominio',
  templateUrl: 'details-registro-dominio.html',
})
export class DetailsRegistroDominioPage {
  item;
  constructor(public modalCtrl: ModalController, public nav: Nav, public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
  }


  Inicio(){
    this.nav.setRoot('InicioPage');
  }

  cotizar(_item){
    const modal = this.modalCtrl.create('ModalCotizarPage', { item: _item });
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsRegistroDominioPage');
  }

}
