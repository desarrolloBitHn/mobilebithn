import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
declare var jquery: any;
declare var $: any;
/**
 * Generated class for the SeguridadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seguridad',
  templateUrl: 'seguridad.html',
})
export class SeguridadPage {
  seguridad = {};
  tipoSeguridad;
  basedatos = [];


  constructor(public http: HttpClient, public modalCtrl: ModalController, public nav: Nav, public navCtrl: NavController, public navParams: NavParams) {
    this.http.get('https://firstdb00.firebaseio.com/0/Servicios.json').subscribe(
      (_data) => {
        for (let key$ in _data){
          if(_data[key$].tiposervicio == "Seguridad"){
            this.basedatos.push(_data[key$]);
          }
        }
        this.tipoSeguridad = 0;
        this.onSegmentChange(this.tipoSeguridad)
      }
    );

  }

  detalleAbajo(id){
    $('#' + id).slideToggle("slow");
    $( "#icon_"+ id ).toggleClass("ion-md-arrow-round-down");
    $( "#icon_"+ id ).toggleClass("ion-md-arrow-round-up");
  }

  onSegmentChange(valor){
    this.seguridad = this.basedatos[valor];
    console.log(valor);

    console.log(this.basedatos);
  }

  cotizar(_item, _id){
    console.log(_id);
    const modal = this.modalCtrl.create('ModalCotizarPage', { item: _item, id: _id });
    modal.present();
  }

  Inicio(){
    this.nav.setRoot('InicioPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeguridadPage');
  }

}
