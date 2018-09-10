import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Storage} from '@ionic/storage';

/**
 * Generated class for the FetchLlamanosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fetch-llamanos',
  templateUrl: 'fetch-llamanos.html',
})
export class FetchLlamanosPage {

  contact: FormGroup;

  constructor(public _storage: Storage, public nav: Nav, public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public http: HttpClient) {
    this.contact = this.createMyForm();
  }

  Inicio(){
    this.nav.setRoot('InicioPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FetchLlamanosPage');
  }

  sendData(){
    let _body:contacto = new contacto();

this._storage.get('email').then((_email) => {
  this.http.get('https://firstdb00.firebaseio.com/0/sesion.json').subscribe(
    (_data)=>{
      for (let key$ in _data){
        if (_data[key$].correo == _email){
          _body.title = this.contact.value.title;
          _body.message = this.contact.value.message;
          _body.name = _data[key$].nombre;
          _body.email = _data[key$].correo;
          _body.enterprise = _data[key$].empresa;
          _body.celphone = _data[key$].celular;
          _body.phone = _data[key$].telefono;
          this.http.post<respuesta>('http://api.bit.hn/v1/mailing/sendContact',_body, {} ).subscribe((datos$) => {
            switch (datos$.type) {
              case "success":
                this.nav.setRoot('InicioPage');
                break;
              case "error":
                break;
              case "fatal_error":
                break;
            }
          });
        }
      }
    }
  );
});

  }

  private createMyForm(){
    return this.formBuilder.group({
      title: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

}

export class contacto {
  email: string;
  name: string;
  enterprise: string;
  phone: string;
  celphone: number;
  title: string;
  message: string;
}

export class respuesta{
  message:string;
  type: string;
}
