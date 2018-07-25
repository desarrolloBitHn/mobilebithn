import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Toast } from '@ionic-native/toast';

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
  item;
  total = 0;
  constructor(private toast: Toast, private http: Http, private emailComposer: EmailComposer, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public formBuilder: FormBuilder) {
    this.formulario = this.crearMiForm();
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log(this.item.valor);
    console.log('ionViewDidLoad ModalCotizarPage');
  }

  cerrar() {
   this.viewCtrl.dismiss();
 }

 guardar(){
  var body = this.formulario.value;
   console.log(this.formulario);
   this.http.post('http://prograpedia.com/SendGrid/sendmail.php',body,{})
   .map(response => response.json())
   .subscribe(data => {
        console.log(data.status + " successfull");
        console.log(data.data + " successfull");
        console.log(data.headers + " successfull");
      });

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
     unidades: new FormControl(0, Validators.required),
     total: new FormControl()
   });
 }

}
