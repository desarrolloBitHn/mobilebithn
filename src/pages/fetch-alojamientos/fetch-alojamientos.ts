import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the FetchAlojamientosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fetch-alojamientos',
  templateUrl: 'fetch-alojamientos.html',
})
export class FetchAlojamientosPage {
  basedatos = [];
  _listaimagenes = [];

  constructor(public http: HttpClient, public nav: Nav, public navCtrl: NavController, public navParams: NavParams) {
    this.http.get('https://firstdb00.firebaseio.com/0/Servicios.json').subscribe(
      (_data) => {
        for (let key$ in _data) {
          if(_data[key$].tiposervicio == "Alojamiento"){
            this.basedatos.push(_data[key$]);
          }
        }


        this.http.get('https://firstdb00.firebaseio.com/0/imagenes/hospedaje.json').subscribe((_img) => {
          for(let _key$ in _img){
            this._listaimagenes.push(_img[_key$]);
            console.log(_img[_key$]);
          }
        });

      }
    );
  }

  Inicio(){
    this.nav.setRoot('InicioPage');
  }

preguntas(parametro){

}

  clickOpenCard(parametro){
    console.log(parametro);
    if(parametro.detalle != null) {
      console.log(parametro)
    }
    if (!parametro) parametro = {};
    this.navCtrl.push('DetalleAlojamientosPage', {
      'item': parametro
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FetchAlojamientosPage');
  }

  cardclick(item){

  }

}
