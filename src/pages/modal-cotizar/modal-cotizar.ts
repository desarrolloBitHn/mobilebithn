import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  Nav, ModalController, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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
  mobnumPattern = "^\+[0-9]+(\s|\S)+[0-9]{2,14}$";
  formulario: FormGroup;
  item;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public formBuilder: FormBuilder) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCotizarPage');
  }

  cerrar() {
   this.viewCtrl.dismiss();
 }

 private crearMiForm(){
   return this.formBuilder.group({
     nombre: new FormControl('', Validators.required),
     correo: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
     empresa: new FormControl('', Validators.required),
     telefono: new FormControl('', [Validators.required, Validators.pattern(this.mobnumPattern)]),
     celular: new FormControl('', [Validators.required, Validators.pattern(this.mobnumPattern)]),
     comentario: new FormControl(),
     valor: new FormControl(),
     unidades: new FormControl('', Validators.required),
     total: new FormControl()
   });
 }

}
