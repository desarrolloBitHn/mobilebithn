import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Nav, ModalController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


/**
 * Generated class for the CorreoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-correo',
  templateUrl: 'correo.html',
})
export class CorreoPage {

  _listaimagenes:string = "";
  tipoCorreo;
  item;
  mes;
  total = 0;
  duracion = 0;
  cuentas = 0;
  valor = 0;
  duracion2 = 0;
  cuentas2 = 0;
  valor2 = 0;
  total2 = 0;
  duracion3 = 0;
  cuentas3 = 0;
  valor3 = 0;
  total3 = 0;


  meses = [{"id": 1, "mes": 1}, {"id": 2, "mes": 3}, {"id": 3, "mes": 6}, {"id": 4, "mes": 12}];
  formulario: FormGroup;
  formulario2: FormGroup;
  formulario3: FormGroup;
  basedatos = [];

  constructor(public http: HttpClient, public modalCtrl: ModalController, public nav: Nav, public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.http.get('https://firstdb00.firebaseio.com/0/Servicios.json').subscribe(
      (_data) => {
        for (let key$ in _data) {
          if (_data[key$].tiposervicio == "Correo") {
            console.log(_data[key$]);
            this.basedatos.push(_data[key$]);
            console.log(this.basedatos);
          }
        }
        this.formulario = this.crearMiForm();
        this.formulario2 = this.crearMiForm();
        this.formulario3 = this.crearMiForm();
        this.item = this.basedatos[0];
        this.tipoCorreo = 2;
        this.onSegmentChange(this.tipoCorreo);

      }
    );


  }

  Inicio() {
    this.nav.setRoot('InicioPage');
  }

  // guardar(){
  //   console.log(this.formulario.value);
  // }

  preguntas(_item, _id) {
    const modal = this.modalCtrl.create('ModalPreguntasPage', {item: _item, id: _id});
    modal.present();
  }

  onChangeInput(valor) {
    if (this.item.id != 1) {
      this.rangoValor();
    }

    var iteracion: number = this.mes - 1;

    if (this.mes != null) {
      if (this.item.id == 1) {
        if (this.mes == 12) {
          this.valor = 5.72
        } else {
          this.valor = 6.24;
        }
        this.total = (this.cuentas * this.valor) * this.mes;
      } else {
        this.rangoValor();
      }
      this.total = (this.cuentas * this.valor) * this.mes;
    }
  }


  cuentasImput1(evento$){
    this.total = ((this.cuentas*5.75) * (this.duracion*12));
  }

  cuentasImput2(evento$){
    this.total2 =(this.rangoValorPlan(this.cuentas2) * (this.duracion2*12));
  }

  cuentasImput3(evento$){
    this.total3 =(this.rangoValorPlan(this.cuentas3) * (this.duracion3*12));
  }



  duracionInput1(evento$) {
    this.total = ((this.cuentas*5.75) * (this.duracion*12));
  }

  duracionInput2(evento$) {
    this.total2 =(this.rangoValorPlan(this.cuentas2) * (this.duracion2*12));
  }

  duracionInput3(evento$) {
    this.total3 =(this.rangoValorPlan(this.cuentas3) * (this.duracion3*12));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CorreoPage');
  }

  onSegmentChange(valor) {
    this.total = 0;
    this.valor = 0;
    this.cuentas = 0;
    for (var i = 0; i < this.basedatos.length; i++) {
      if (this.basedatos[i].id == valor) {
        this.item = this.basedatos[i];
        this._listaimagenes =this.basedatos[i].imagen;
      }
    }
  }

  rangoValor() {
    if (this.cuentas < 6) {
      this.valor = this.item.planes[0].valor;
    } else if (this.cuentas < 26) {
      this.valor = this.item.planes[1].valor;
    } else if (this.cuentas < 50) {
      this.valor = this.item.planes[2].valor;
    } else if (this.cuentas >= 50) {
      this.valor = this.item.planes[3].valor;
    }
  }


  rangoValorPlan(_num) {
    let _valor: number;
    if (_num < 6) {
      console.log(this.item.planes[0].valor);
      return _valor = this.item.planes[0].valor * _num;
    } else if (_num < 26) {
      console.log(this.item.planes[0].valor);
      return _valor = this.item.planes[1].valor * _num;
    } else if (_num < 50) {
      console.log(this.item.planes[0].valor);
      return _valor = this.item.planes[2].valor * _num;
    } else if (_num >= 50) {
      console.log(this.item.planes[0].valor);
      return _valor = this.item.planes[3].valor * _num;
    }
  }

  onChangeOpction1(mes) {
    var _mes = this.intMes(mes);
    this.mes = _mes;
    if (_mes == 12) {
      this.total = (this.cuentas * 5.75) * _mes;
    } else {
      this.total = (this.cuentas * 6.24) * _mes;
    }
  }

  onChangeOpction(mes) {
    var _mes = this.intMes(mes);
    this.mes = _mes;
    this.total = (this.cuentas * this.valor) * _mes;
  }

  intMes(mes) {

    for (var i = 0; i < this.meses.length; i++) {
      if (this.meses[i].id == mes) {
        return this.meses[i].mes;
      }
    }
  }

  cotizar(_item) {
    console.log(this.formulario.controls["duracion"]);
    const modal = this.modalCtrl.create('ModalCotizarPage', {
      item: _item,
      extra: {"cuentas": this.formulario.value.cuentas, "años": this.formulario.value.duracion}
    });
    modal.present();
  }

  cotizar2(_item) {
    console.log(this.formulario2.controls["duracion"]);
    const modal = this.modalCtrl.create('ModalCotizarPage', {
      item: _item,
      extra: {"cuentas": this.formulario2.value.cuentas, "años": this.formulario2.value.duracion}
    });
    modal.present();
  }

  cotizar3(_item) {
    console.log(this.formulario3.controls["duracion"]);
    const modal = this.modalCtrl.create('ModalCotizarPage', {
      item: _item,
      extra: {"cuentas": this.formulario3.value.cuentas, "años": this.formulario3.value.duracion}
    });
    modal.present();
  }

  private crearMiForm() {
    return this.formBuilder.group({
      cuentas: new FormControl(0, Validators.max(500)),
      duracion: new FormControl(),
      total: new FormControl()
    });
  }


}
