import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController, Nav } from 'ionic-angular';

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

  _slideUrl="";
  _slidepage = 1;

  @ViewChild(Slides) slide: Slides;

  constructor(public nav: Nav, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    setInterval(() => {this.goToSlide(this._slidepage);},2000);
  }

  ionViewDidLoad() {
    this.mensaje();
    console.log('ionViewDidLoad InicioPage');
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
