import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Nav } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


/**
 * Generated class for the UsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {
  _key$;
  _productos$:producto[];
  signupError: string;
  form: FormGroup;

  constructor( fb: FormBuilder, private _storage: Storage, public http: HttpClient, public navCtrl: NavController, public navParams: NavParams, private _menu: MenuController, private _nav : Nav) {
    const menu = this._menu.get('rightMenu')
    menu.close();
    this.form = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      name: ['', Validators.compose([Validators.required])],
      enterprise: [''],
      phone: [''],
      cellphone: ['']
    });
    this._storage.get('email').then((_val) => {
      this.http.get("https://firstdb00.firebaseio.com/0/sesion.json")
        .subscribe((response) => {
          for (let key$ in response) {
            if(response[key$].correo == _val){
              this._key$ = key$;
              this._productos$ = new Array();
              for (let key2$ in response[key$].productos){
                let _producto1$ :producto = new producto();
                _producto1$.comentario = response[key$].productos[key2$].comentario;
                _producto1$.descripcion = response[key$].productos[key2$].descripcion;
                _producto1$.plan = response[key$].productos[key2$].plan;
                _producto1$.producto = response[key$].productos[key2$].producto;
                _producto1$.subtipo = response[key$].productos[key2$].subtipo;
                _producto1$.tipo = response[key$].productos[key2$].tipo;
                _producto1$.unidadades = response[key$].productos[key2$].unidadades;
                this._productos$.push(_producto1$);
              }
              this.form.controls["email"].setValue(response[key$].correo);
              this.form.controls["name"].setValue(response[key$].nombre);
              this.form.controls["enterprise"].setValue(response[key$].empresa);
              this.form.controls["phone"].setValue(response[key$].telefono);
              this.form.controls["cellphone"].setValue(response[key$].celular);
            }
          }
        });
    });
  }

  Inicio(){
    this._nav.setRoot('InicioPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPage');
  }

  save(){
    let _body:sesion = new sesion();
    _body.celular =  this.form.controls["email"].value;
    _body.comentario =  this.form.controls["email"].value;
    _body.correo =  this.form.controls["email"].value;
    _body.empresa =  this.form.controls["email"].value;
    _body.nombre =  this.form.controls["email"].value;
    _body.productos =  this._productos$;
    _body.telefono =  this.form.controls["email"].value;
    this.http.put(`https://firstdb00.firebaseio.com/0/sesion/${this._key$}.json`, _body, {}).subscribe(
      (_data) => {
        console.log(_data);
      }
    );
  }

}

export class sesion {
  celular:string;
  comentario:string;
  correo:string;
  empresa:string;
  nombre:string;
  productos :producto[];
  telefono:string;
}

export class producto {
  comentario:string;
  descripcion:string;
  plan:string;
  producto:string;
  subtipo:string;
  tipo:string;
  unidadades:number;
}

