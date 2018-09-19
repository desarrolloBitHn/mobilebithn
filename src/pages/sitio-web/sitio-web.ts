import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
declare var jquery: any;
declare var $: any;
/**
 * Generated class for the SitioWebPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-sitio-web',
  templateUrl: 'sitio-web.html',
})
export class SitioWebPage {
  herramienta = {};
  herramientaWeb;
  basedatos1 =[];

  constructor(public http: HttpClient, public modalCtrl: ModalController, public nav: Nav, public navCtrl: NavController, public navParams: NavParams) {
    this.http.get('https://firstdb00.firebaseio.com/0/Servicios.json').subscribe(
      (_datos) => {
        for (let key$ in _datos) {
          if(_datos[key$].tiposervicio == 'Sitio Web'){
            this.basedatos1.push(_datos[key$]);
          }
        }
        console.log(this.basedatos1);
        this.herramientaWeb = 0;
        this.onSegmentChange(0);
      }
    );
  }

  detalleAbajo(id){
    $('#' + id).slideToggle("slow" );
  }

  Inicio(){
    this.nav.setRoot('InicioPage');
  }

  cotizar(_item, _id){
    const modal = this.modalCtrl.create('ModalCotizarPage', { item: _item , id:_id});
    modal.present();
  }

    onSegmentChange(valor){
      this.herramienta = this.basedatos1[valor];
      console.log(this.herramienta);
    }

  ionViewDidLoad() {

    console.log('ionViewDidLoad SitioWebPage');
  }

}
