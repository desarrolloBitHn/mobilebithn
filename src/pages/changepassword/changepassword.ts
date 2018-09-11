import {Component} from '@angular/core';
import {IonicPage, MenuController, Nav, NavController, NavParams, ToastController} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn} from '@angular/forms';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {Toast} from '@ionic-native/toast';


/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {

  changePasswordForm: FormGroup;
  loginError: string;

  constructor(private _toast: ToastController, fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private _menu: MenuController, private _nav: Nav, private _http: HttpClient, private _storage: Storage, private _auth: AuthServiceProvider) {
    const menu = this._menu.get('rightMenu')
    menu.close();
    this.changePasswordForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

  Inicio() {
    this._nav.setRoot('InicioPage');
  }

  senPassword() {
    let _res: any;
    _res = this._auth.sendResetPasswordToEmail(this.changePasswordForm.value.email);

    var toast1 = this._toast.create({
      message: 'Se ha enviado correctamente el enlace al correo',
      duration: 3000,
      position: 'top'
    });
    toast1.onDidDismiss(function () {
      console.log('Dismissed toast');
    });
    toast1.present();
    this.navCtrl.setRoot('LoginPage');
  }

  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let input = control.value;

      let isValid = control.root.value[field_name] == input
      if (!isValid)
        return {'equalTo': {isValid}}
      else
        return null;
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
  }

}
