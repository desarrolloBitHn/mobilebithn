import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, Nav} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {Toast} from '@ionic-native/toast';

declare var jquery: any;
declare var $: any;

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
  buscador = "";
  tipoDominio = "Nuevo Registro";
  lista2 = [];
  listadominio1 = [];
  _listaimagenes = [];
  nombre;
  descripcion;

  constructor(private http:HttpClient, private toast: Toast, public nav: Nav, public modalCrtl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  this.http.get('https://firstdb00.firebaseio.com/0/Servicios.json').subscribe(
    (_data) => {
      for(let key$ in _data){
        if(_data[key$].nombre == "Dominios"){
          this.listadominio1.push(_data[key$]);
        }
      }
      this.nombre =this.listadominio1[0].nombre;
      this.descripcion =this.listadominio1[0].descripcion;

       this.http.get('https://firstdb00.firebaseio.com/0/imagenes/dominio.json').subscribe((_img) => {
        for(let _key$ in _img){
          this._listaimagenes.push(_img[_key$]);
        }
      });

      this.tipoDominio = "Nuevo Registro";
      this.cambioRadio(this.tipoDominio);

    }
  );
  this.agregarItemLista();
  }

  Inicio() {
    this.nav.setRoot('InicioPage');
  }

  whois(){
    this.navCtrl.push('WhoisPage');
  }

  detalleDominio(parametro) {

    if (!parametro) parametro = {};
    this.navCtrl.push('DetailsRegistroDominioPage', {
      'item': parametro
    });

  }

  cambioRadio(evento) {
    switch (evento) {
      case "Nuevo Registro":
        this.agregarItemLista();
        break;
      case "Transferencias":
        this.agregarItemLista();
        break;
      case "Renovaciones":
        this.agregarItemLista();
        break;
      case "Restauraciones":
        this.agregarItemLista();
        break;
    }
  }

  agregarItemLista(){
    this.lista2 = [];
    for (let i = 0; i < this.listadominio1.length; i++) {
      if (this.listadominio1[i].subtiposervicio == this.tipoDominio) {
        this.lista2.push(this.listadominio1[i]);
      }
    }
    console.log(this.lista2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FetchDominiosPage');
  }
}
