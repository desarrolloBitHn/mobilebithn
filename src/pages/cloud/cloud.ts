import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, ModalController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
declare var jquery: any;
declare var $: any;
/**
 * Generated class for the CloudPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cloud',
  templateUrl: 'cloud.html',
})
export class CloudPage {
database;
  _listaimagenes = [];

  constructor( public http:HttpClient,  public modalCtrl: ModalController, public nav: Nav, public navCtrl: NavController, public navParams: NavParams) {
    this.database = this.http.get('https://firstdb00.firebaseio.com/0/Servicios.json').subscribe(
      (_data) => {
        for (let key$ in _data){
          if (_data[key$].tiposervicio == "Cloud") {
            this.database = _data[key$];
            this._listaimagenes.push(this.database.imagen);
          }
        }
      }
    );
  }

  detalleAbajo(id){
    $('#' + id).slideToggle();
    $( "#icon_"+ id ).toggleClass("ion-md-arrow-round-down");
    $( "#icon_"+ id ).toggleClass("ion-md-arrow-round-up");
  }


  Inicio(){
    this.nav.setRoot('InicioPage');
  }

  cotizar(_item, _id){
    const modal = this.modalCtrl.create('ModalCotizarPage', { item: _item , id : _id});
    modal.present();
  }

  preguntas(_item){
    const modal = this.modalCtrl.create('ModalPreguntasPage', { item: _item });
    modal.present();
  }

  ionViewDidLoad() {
    console.log(this.database);
    console.log('ionViewDidLoad CloudPage');
  }

}
