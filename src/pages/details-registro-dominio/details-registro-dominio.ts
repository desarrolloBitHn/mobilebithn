import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsRegistroDominioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-registro-dominio',
  templateUrl: 'details-registro-dominio.html',
})
export class DetailsRegistroDominioPage {
  item;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsRegistroDominioPage');
  }

}
