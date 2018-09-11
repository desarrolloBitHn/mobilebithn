import { Component } from '@angular/core';
import {IonicPage, Nav, NavController, NavParams, ToastController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Storage} from '@ionic/storage';
import {contacto, respuesta} from "../fetch-llamanos/fetch-llamanos";

/**
 * Generated class for the AppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-app',
  templateUrl: 'app.html',
})
export class AppPage {
  formulario: FormGroup;
  _listaimagenes = [];
  constructor(private _toast: ToastController, public http: HttpClient, public _storage: Storage, public formBuilder: FormBuilder, public nav: Nav, public navCtrl: NavController, public navParams: NavParams) {
    this.formulario = this.createMyForm();
    this.formulario.controls["title"].setValue("Cotización de Aplicación Móvil");
    this._listaimagenes.push("https://preview.ibb.co/kWPwN9/CREACI_N_DE_APP.jpg");
  }

  Inicio() {
    this.nav.setRoot('InicioPage');
  }

  sendData() {
    let _body: contacto = new contacto();
    this._storage.get('email').then((_email) => {
      this.http.get('https://firstdb00.firebaseio.com/0/sesion.json').subscribe(
        (_data) => {
          for (let key$ in _data) {
            if (_data[key$].correo == _email) {
              _body.title = this.formulario.value.title;
              _body.message = this.formulario.value.message;
              _body.name = _data[key$].nombre;
              _body.email = _data[key$].correo;
              _body.enterprise = _data[key$].empresa;
              _body.celphone = _data[key$].celular;
              _body.phone = _data[key$].telefono;
              this.http.post<respuesta>('http://api.bit.hn/v1/mailing/sendContact', _body, {}).subscribe((datos$) => {
                switch (datos$.type) {
                  case "success":
                    var toast1 = this._toast.create({
                      message: 'Se ha enviado su cotización',
                      duration: 3000,
                      position: 'top'
                    });
                    toast1.onDidDismiss(function () {
                      console.log('Dismissed toast');
                    });
                    toast1.present();
                    this.nav.setRoot('InicioPage');
                    break;
                  case "error":
                    var toast2 = this._toast.create({
                      message: 'Ha ocurrido un error, intente luego',
                      duration: 3000,
                      position: 'top'
                    });
                    toast2.onDidDismiss(function () {
                      console.log('Dismissed toast');
                    });
                    toast2.present();
                    break;
                  case "fatal_error":
                    var toast3 = this._toast.create({
                      message: 'Error Fatal',
                      duration: 3000,
                      position: 'top'
                    });
                    toast3.onDidDismiss(function () {
                      console.log('Dismissed toast');
                    });
                    toast3.present();
                    break;
                }
              });
            }
          }
        }
      );
    });
  }

  private createMyForm() {
    return this.formBuilder.group({
      title: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppPage');
  }

}
