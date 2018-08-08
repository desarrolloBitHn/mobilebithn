import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController, Nav } from 'ionic-angular';
import { Http } from '@angular/http';
import { File } from '@ionic-native/file';

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

  _useremail;
  _userid;
  _slidepage = 1;

  @ViewChild(Slides) slide: Slides;

  constructor(private file: File,public http: Http, public nav: Nav, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    setInterval(() => {this.goToSlide(this._slidepage);},2000);
    this._useremail = navParams.get('email');
    this._userid = navParams.get('id');
    this.leerArchivo();
    //this.escribirArchivo({'userinfo':{"email": this._useremail, "id": this._userid}});
  }

  ionViewDidLoad() {
    this.mensaje();
    console.log('ionViewDidLoad InicioPage');

    let body = {
      "id":1,
      "nombre":"Wenceslao",
      "empresa":"BitHn"
    };
    this.http.get("https://firstdb00.firebaseio.com/0/sesion.json")
      .subscribe(response =>{
        console.log(response);
      })

  }

  leerArchivo(){
    this.file.readAsText(this.file.applicationDirectory + "www/assets/data/", "info_sesion.json").then(
      result => {
        console.log(result);
        console.log("pase por aqui leyendo");
      }
    );
/**
    this.http.get('assets/data/info_sesion.json',{})
      .subscribe(response => {
        console.log(response);
        console.log("leí el archivo");
        //this.toast.show(data, '5000', 'center').subscribe(toast => {console.log(toast);});
      });  **/
  }

  escribirArchivo(_body){
    console.log(_body);
    this.http.post('assets/data/info_sesion.json',_body)
      .subscribe(response => {
        console.log(response);
        console.log("escribí el archivo");
        this.leerArchivo();
      });
  }

  paginacion(pagina){
    this.nav.setRoot(pagina);
  }

  goToSlide(numero) {
    //lista = [1,2,3,4];
      this.slide.slideTo(numero, 500);
      if(numero<4){
        this._slidepage = numero + 1;
      }else{
        this._slidepage = 0;
      }
    }

  mensaje(){
    const alert = this.alertCtrl.create({
      title: 'Nuevas promociones!',
      subTitle: '!Aprovecha, BITHN, tiene las nuevas promociones de ésta semana!',
      buttons: ['OK']
    });
    alert.present();
  }

}
