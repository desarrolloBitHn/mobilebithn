import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


/**
 * Generated class for the WhoisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-whois',
  templateUrl: 'whois.html',
})
export class WhoisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
   // $('#loadExternalURL').load('https://punto.hn/domain.php?action=whois');
    const browser = this.iab.create('https://punto.hn/domain.php?action=whois', '_system');
    browser.show();

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad WhoisPage');
  }

}
