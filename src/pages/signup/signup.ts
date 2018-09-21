import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  signupError: string;
  form: FormGroup;
  inputType = 'password';
  iconPasswor = 'eye';
  inputTypeConfirm = 'password';
  iconConfirm = 'eye';


  constructor(private menu: MenuController, private _storage: Storage, public http: HttpClient, public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder, private auth: AuthServiceProvider) {
    this.form = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirm: ['', Validators.compose([Validators.required, this.equalto('password') ])],
      name: ['', Validators.compose([Validators.required])],
      enterprise: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      cellphone: ['', Validators.compose([Validators.required])]
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  };

  showPass(){
    if (this.inputType == 'password') {
      this.inputType = 'text';
      this.iconPasswor = 'eye-off';
    }else{
      this.inputType = 'password';
      this.iconPasswor = 'eye';
    }
  }

  showConfirm(){
    if (this.inputTypeConfirm == 'password') {
      this.inputTypeConfirm = 'text';
      this.iconConfirm = 'eye-off';
    }else{
      this.inputTypeConfirm = 'password';
      this.iconConfirm = 'eye';
    }
  }

  signup(){
    let data = this.form.value;
    let credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signUp(credentials).then(
      () => {
        let _session = {
          "telefono":this.form.controls["phone"].value,
          "celular":this.form.controls["cellphone"].value,
          "correo":this.form.controls["email"].value,
          "empresa":this.form.controls["enterprise"].value,
          "nombre":this.form.controls["name"].value
        }
        this.http.post('https://firstdb00.firebaseio.com/0/sesion.json',_session)
          .subscribe(response => {
            console.log(response);
            this._storage.set('email',this.form.controls["email"].value);
          });
        this.menu.enable(true, "leftMenu");
        this.navCtrl.setRoot('InicioPage')
      },
      error => this.signupError = error.message
    );


  }

  equalto(field_name): ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} => {
      let input = control.value;

      let isValid=control.root.value[field_name]==input
      if(!isValid)
        return { 'equalTo': {isValid} }
      else
        return null;
    };
  }

}
