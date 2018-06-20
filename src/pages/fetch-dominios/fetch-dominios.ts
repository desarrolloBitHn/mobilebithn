import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Nav } from 'ionic-angular';

/**
 * Generated class for the FetchDominiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fetch-dominios',
  templateUrl: 'fetch-dominios.html',
})
export class FetchDominiosPage {
  buscador="";
  listadominio=
  [
    {
      "id": 1,
      "descripcion": ".hn",
      "_1ano": 57.5,
      "_2ano": 115,
      "_3ano": 172.5,
      "_5ano": 287.5,
      "_10ano": 575
    },
    {
      "id": 2,
      "descripcion": ".com.hn",
      "_1ano": 57.5,
      "_2ano": 115,
      "_3ano": 172.5,
      "_5ano": 287.5,
      "_10ano": 575
    },
    {
      "id": 3,
      "descripcion": ".coop.hn",
      "_1ano": 57.5,
      "_2ano": 115,
      "_3ano": 172.5,
      "_5ano": 287.5,
      "_10ano": 575
    },
    {
      "id": 4,
      "descripcion": ".edu.hn",
      "_1ano": 57.5,
      "_2ano": 115,
      "_3ano": 172.5,
      "_5ano": 287.5,
      "_10ano": 575
    },
    {
      "id": 5,
      "descripcion": ".net.hn",
      "_1ano": 57.5,
      "_2ano": 115,
      "_3ano": 172.5,
      "_5ano": 287.5,
      "_10ano": 575
    },
    {
      "id": 6,
      "descripcion": ".org.hn",
      "_1ano": 57.5,
      "_2ano": 115,
      "_3ano": 172.5,
      "_5ano": 287.5,
      "_10ano": 575
    },
    {
      "id": 6,
      "descripcion": ".biz",
      "_1ano": 19.6,
      "_2ano": 39.2,
      "_3ano": 58.8,
      "_5ano": 98,
      "_10ano": 196
    },
    {
      "id": 7,
      "descripcion": ".blackfriday",
      "_1ano": 150.38,
      "_2ano": 300.76,
      "_3ano": 451.14,
      "_5ano": 751.9,
      "_10ano": 1503.8
    },
    {
      "id": 8,
      "descripcion": ".bz",
      "_1ano": 31.9,
      "_2ano": 63.8,
      "_3ano": 95.7,
      "_5ano": 159.5,
      "_10ano": 319
    },
    {
      "id": 9,
      "descripcion": ".ca",
      "_1ano": 20.14,
      "_2ano": 40.28,
      "_3ano": 60.42,
      "_5ano": 100.7,
      "_10ano": 201.4
    },
    {
      "id": 10,
      "descripcion": ".co",
      "_1ano": 11,
      "_2ano": 53,
      "_3ano": 95,
      "_5ano": 179,
      "_10ano": 0
    },
    {
      "id": 11,
      "descripcion": ".com",
      "_1ano": 14.43,
      "_2ano": 28.86,
      "_3ano": 43.29,
      "_5ano": 72.15,
      "_10ano": 144.3
    },
    {
      "id": 12,
      "descripcion": ".info",
      "_1ano": 18.13,
      "_2ano": 36.26,
      "_3ano": 54.39,
      "_5ano": 90.65,
      "_10ano": 181.3
    },
    {
      "id": 13,
      "descripcion": ".mx",
      "_1ano": 11.54,
      "_2ano": 78.54,
      "_3ano": 145.54,
      "_5ano": 279.54,
      "_10ano": 0
    },
    {
      "id": 14,
      "descripcion": ".net",
      "_1ano": 18.63,
      "_2ano": 37.26,
      "_3ano": 55.89,
      "_5ano": 93.15,
      "_10ano": 186.3
    },
    {
      "id": 15,
      "descripcion": ".online",
      "_1ano": 52.06,
      "_2ano": 104.12,
      "_3ano": 156.18,
      "_5ano": 260.3,
      "_10ano": 520.6
    },
    {
      "id": 16,
      "descripcion": ".org",
      "_1ano": 19.24,
      "_2ano": 38.48,
      "_3ano": 57.72,
      "_5ano": 96.2,
      "_10ano": 192.4
    },
    {
      "id": 17,
      "descripcion": ".tv",
      "_1ano": 41.98,
      "_2ano": 83.96,
      "_3ano": 125.94,
      "_5ano": 209.9,
      "_10ano": 419.8
    },
    {
      "id": 18,
      "descripcion": ".us",
      "_1ano": 16.8,
      "_2ano": 33.6,
      "_3ano": 50.4,
      "_5ano": 84,
      "_10ano": 168
    }
  ];



  constructor(public nav: Nav, public modalCrtl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

    Inicio(){
      this.nav.setRoot('InicioPage');
    }

  detalleDominio(parametro){
    if (!parametro) parametro = {};
    this.navCtrl.push('DetailsRegistroDominioPage', {
      'item': parametro
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FetchDominiosPage');
  }

}
