import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Toast } from '@ionic-native/toast';
import {ServicioService} from '../../providers/servicio-service/servicio-service';
import {Servicio} from '../../interfaces/servicio.interface';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

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
  item;
  datos0;
  total = 0;
  constructor(private auth: AuthServiceProvider, private _servicio: ServicioService, private toast: Toast, private http: Http, private emailComposer: EmailComposer, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public formBuilder: FormBuilder) {
    this.formulario = this.crearMiForm();
    this.item = navParams.get('item');
    //var prueba = this.http.get('assets/data/info_sesion.json').map(res => res.json()).subscribe(data => {
                                                                                      //this.datos0 = data;
                                                                                      //this.formulario.controls["nombre"].setValue(this.datos0.nombre);
                                                                                      //this.formulario.controls["correo"].setValue(this.datos0.correo);
                                                                                      //this.formulario.controls["empresa"].setValue(this.datos0.empresa);
                                                                                      //this.formulario.controls["telefono"].setValue(this.datos0.telefono);
                                                                                      //this.formulario.controls["comentario"].setValue(this.datos0.comentario);
                                                                                 //});

  }

  ionViewDidLoad() {



  }

  cerrar() {
   this.viewCtrl.dismiss();
 }

 guardar(){
    let userid: any ;
    let componente : Servicio = {
     "nombre":"Wenceslao Flores",
     "correo":"desarrollo",
     "empresa":"BIT-HN ",
     "telefono":"",
     "celular":"95607516",
     "comentario":"este es solo un comentario de prueba",
     "unidades":1,
     "productos":[],
     "uid": userid
   };


    this._servicio.nuevaSesion(componente)
      .subscribe(
        data=>{});



   let body = {
     "nombre":"",
     "correo":"",
     "empresa":"",
     "telefono":"",
     "celular":"",
     "comentario":"",
     "unidades":""
   };


   /**
   console.log(this.formulario.value);
   this.http.post('http://api.bit.hn/v1/mailing/send',body,{})
   .map(response => response.json())
   .subscribe(data => {
            this.response1 =data;
            var mensaje = "";
            switch(this.response1.type){
              case 'success':
                mensaje = this.response1.message;
                this.cerrar();
              break;
              case 'error':
                mensaje = this.response1.message;
              break;
              case 'fatal_error':
                mensaje = this.response1.message;
              break;
            }
            this.toast.show(mensaje, '5000', 'center').subscribe(toast => {console.log(toast);});
    });  **/
   //this.datos0.nombre = this.formulario.value.nombre;
   //this.datos0.correo = this.formulario.value.correo;
   //this.datos0.empresa = this.formulario.value.empresa;
   //this.datos0.telefono = this.formulario.value.telefono;
   //this.datos0.comentario = this.formulario.value.comentario;
   //this.http.put('assets/data/info_sesion.json/1', this.datos0, {})
 }

 sumarLista() {

 }

 private crearMiForm(){
   return this.formBuilder.group({
     nombre: new FormControl('', Validators.required),
     correo: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
     empresa: new FormControl('', Validators.required),
     telefono: new FormControl('', [Validators.required, Validators.pattern(this.mobnumPattern)]),
     celular: new FormControl('', [Validators.required, Validators.pattern(this.mobnumPattern)]),
     comentario: new FormControl(),
     unidades: new FormControl(0, Validators.required),
   });
 }

}
