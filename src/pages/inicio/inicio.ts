import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides, AlertController, Nav} from 'ionic-angular';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Sesion} from '../../interfaces/sesion.interface';
import {Storage} from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';


/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {


  _slidepage = 1;
  _listaUsuarios;
  _listaimagenes = [];


  @ViewChild(Slides) slide: Slides;

  constructor(private _socialSharing: SocialSharing, private _storage: Storage, public httpc: HttpClient, public http: Http, public nav: Nav, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.httpc.get(`https://firstdb00.firebaseio.com/0/imagenes/inicio/.json`).subscribe((_data) => {
      for (let key$ in _data){
        this._listaimagenes.push(_data[key$]);
      }
      setInterval(() => {
        this.goToSlide(this._slidepage);
      }, 2000);
      this._storage.get('email').then((_val) => {
        console.log(_val);
      });
    });
  }

  ionViewDidLoad() {
    this.mensaje();
    console.log('ionViewDidLoad InicioPage');


    this.httpc.get("https://firstdb00.firebaseio.com/0/sesion.json")
      .subscribe((response: Sesion[]) => {
        for (let key$ in response) {
          console.log(response[key$]);
        }
        this._listaUsuarios = response;
      });

  }


  share(){
    this._socialSharing.shareViaWhatsApp("Hola, le comparto esta aplicación","","https://play.google.com/store/apps/details?id=hn.punto.app").then((_datos) => {
      console.log(_datos);
    }).catch(() => {
      // Sharing via email is not possible
    });
  }

  escribirArchivo(_body) {
    console.log("cuerpo" + _body);
    this.http.post('https://firstdb00.firebaseio.com/0/sesion.json', _body)
      .subscribe(response => {
        console.log(response);
        console.log("escribí el archivo");

      });
  }

  paginacion(pagina) {
    this.nav.setRoot(pagina);
  }

  goToSlide(numero) {
    //lista = [1,2,3,4];
    this.slide.slideTo(numero, 500);
    if (numero < this._listaimagenes.length) {
      this._slidepage = numero + 1;
    } else {
      this._slidepage = 0;
    }
  }

  mensaje() {
    this.httpc.get<mensaje>('https://firstdb00.firebaseio.com/0/notificaciones/0.json')
      .subscribe((response: mensaje) => {
        if (response.mostrar) {
          const alert = this.alertCtrl.create({
            title: response.titulo,
            subTitle: response.comentario,
            buttons: ['OK']
          });
          alert.present();
        }
      });

  }

}

export interface mensaje {
  titulo: string;
  comentario: string;
  mostrar: boolean;
}
