import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav} from 'ionic-angular';

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

  constructor(public nav: Nav, public navCtrl: NavController, public navParams: NavParams) {
  }

  Inicio(){
    this.nav.setRoot('InicioPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CloudPage');
  }

}
