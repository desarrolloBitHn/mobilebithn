import {Component} from '@angular/core';
import {EmailComposer} from '@ionic-native/email-composer';
import {IonicPage, MenuController, NavController, NavParams, ViewController, ToastController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Toast} from '@ionic-native/toast';
import {ServicioService} from '../../providers/servicio-service/servicio-service';
import {Servicio} from '../../interfaces/servicio.interface';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {Storage} from '@ionic/storage';
import {Sesion} from "../../interfaces/sesion.interface";


/**
 * Generated class for the ModalCotizarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-cotizar',
  templateUrl: 'modal-cotizar.html',
})
export class ModalCotizarPage {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobnumPattern = "^\\+[0-9]+(\s|\S)+[0-9]{2,14}$";
  formulario: FormGroup;
  response1;
  email1;
  telefono;
  celular;
  item;
  id;
  extra;
  _listaUsuarios;
  meses = "";
  total = 0;


  constructor( private menu: MenuController, private _storage: Storage, private auth: AuthServiceProvider, private _servicio: ServicioService, private toast: Toast, private _toast: ToastController, private http: HttpClient, private emailComposer: EmailComposer, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public formBuilder: FormBuilder) {
    this.formulario = this.crearMiForm();
    this.item = navParams.get('item');
    this.id = navParams.get('id');
    this.extra = navParams.get('extra');
    console.log(this.item);
    console.log(this.id);
    console.log(this.extra);
    this.infoCliente();
  }

  ionViewDidLoad() {
  }

  infoCliente() {

    this._storage.get('email').then((_value) => {

      this.http.get("https://firstdb00.firebaseio.com/0/sesion.json")
        .subscribe((response: Sesion[]) => {

          for (let key$ in response) {

            if (response[key$].correo == _value) {

              this.formulario.controls["correo"].setValue(response[key$].correo);
              this.formulario.controls["nombre"].setValue(response[key$].nombre);
              this.formulario.controls["empresa"].setValue(response[key$].empresa);
              this.telefono = response[key$].telefono;
              this.celular = response[key$].celular;
              if (this.extra) {
                this.formulario.controls["unidades"].setValue(this.extra);
              }
            }

            if (this.item.tiposervicio == "Correo") {
              this.formulario.controls["unidades"].setValue(this.extra.cuentas);
            }
            ;
          }
        });
    });
  }

  cerrar() {
    this.viewCtrl.dismiss();
  }

  cotizar() {
    let plan:string = "";
    console.log(this.id);
    for(let key$ in this.item.planes){
      if (this.item.planes[key$].id == this.id ){
        plan = this.item.planes[key$].nombre;
        console.log(this.item.planes[key$].nombre);
      }
    }
    console.log(plan);



    let _body = {
      "correo": this.formulario.controls["correo"].value,
      "nombre": this.formulario.controls["nombre"].value,
      "empresa": this.formulario.controls["empresa"].value,
      "telefono":this.telefono,
      "celular":this.celular,
      "unidades": this.formulario.controls["unidades"].value,
      "comentario": this.formulario.controls["comentario"].value,
      "producto": this.item.nombre,
      "tipo": this.item.tiposervicio,
      "subtipo": this.item.subtiposervicio,
      "descripcion": this.item.descripcion,
      "plan": plan
    };

    if (this.item.tiposervicio == "Correo"){
      _body.unidades = _body.unidades + "(" + this.extra.años + "años)";
    }
    console.log(_body);
    
    this.http.post('http://api.bit.hn/v1/mailing/sendQuotation', _body ).subscribe((_data) => {
      this.cerrar();
    });

  }

  agregar() {
    //let _body= { 'comentario': '', 'descripcion': '',  'plan': '',  'producto': '', 'subtipo': '',  'tipo': '',   'unidades': 0,   'meses': ''  };
    let _body:informacion = new informacion();
    _body.unidades = this.formulario.controls["unidades"].value;
    _body.comentario = this.formulario.controls["comentario"].value;
    if (this.item) {
      _body.producto = this.item.nombre;
      _body.tipo = this.item.tiposervicio;
      _body.subtipo = this.item.subtiposervicio;
      _body.descripcion = this.item.descripcion;
      if (this.id) {
        _body.plan = this.item.planes[this.id].nombre;
      }
    }


    this._storage.get('email').then((_email) => {
      this.http.get('https://firstdb00.firebaseio.com/0/sesion.json').subscribe(
        (_data) => {
          for (let key$ in _data) {
            if (_data[key$].correo == _email) {
              this.http.post<informacion>(`https://firstdb00.firebaseio.com/0/sesion/${key$}/productos.json`, _body, {}).subscribe((_response) => {
                if(_response.plan == _body.plan){
                  console.log(key$);
                  this.menu.enable(true, "rightMenu");
                }
              });
            }
          }
        }
      );
    });

  }


  private crearMiForm() {
    return this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      empresa: new FormControl('', Validators.required),
      comentario: new FormControl(),
      unidades: new FormControl(1, Validators.required),
    });
  }

}

export class informacion {
  comentario: string;
  producto: string;
  tipo: string;
  subtipo: string;
  unidades: number;
  descripcion: string;
  plan: string;
  años: string;
}
