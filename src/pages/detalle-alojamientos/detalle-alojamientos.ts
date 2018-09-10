import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Nav } from 'ionic-angular';
declare var jquery: any;
declare var $: any;
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

  Caracteristicas(servicio){
    const modal = this.modalCtrl.create('ModalInfoDetallePage', { item: servicio });
    modal.present();
  }

  detalleAbajo(id){
    $('#' + id).slideToggle();
    $( "#icon_"+ id ).toggleClass("ion-md-arrow-round-down");
    $( "#icon_"+ id ).toggleClass("ion-md-arrow-round-up");
  }

  preguntas(_item){
    const modal = this.modalCtrl.create('ModalPreguntasPage', { item: _item });
    modal.present();
  }

  Inicio(){
    this.nav.setRoot('InicioPage');
  }

  cotizar(_item, _id){
    const modal = this.modalCtrl.create('ModalCotizarPage', { item: _item , id: _id});
    modal.present();
  }

  ionViewDidLoad() {
    console.log(this.item);


    console.log('ionViewDidLoad DetalleAlojamientosPage');
  }

}
