import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClient} from "@angular/common/http";
import {Storage} from '@ionic/storage';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  private _http: HttpClient;
  private _menu:MenuController;
  private _storage: Storage;

  @ViewChild(Nav) nav: Nav;
    rootPage:any = 'LoginPage';
    _nombre;
    _correo;
    _key;
    _productos:Array<producto> = new Array<producto>();
    pages: Array<{title: string, component: any, icon: string}>;

    config: Array<{title: string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthServiceProvider, http:HttpClient, storage:Storage, menu:MenuController) {
    this._http = http;
    this._menu = menu;
    this._storage = storage;
    this.pages = [
      { title: 'Dominios', component: 'FetchDominiosPage', icon:'./assets/imgs/0101.svg'},
      { title: 'Alojamientos', component: 'FetchAlojamientosPage' , icon:'./assets/imgs/0102.svg'},
      { title: 'Seguridad', component: 'SeguridadPage' , icon:'./assets/imgs/0106.svg'},
      { title: 'Alojamiento en la Nube', component: 'CloudPage' , icon:'./assets/imgs/0103.svg'},
      { title: 'Correo', component: 'CorreoPage' , icon:'./assets/imgs/0105.svg'},
      { title: 'Sitios Web', component: 'SitioWebPage' , icon:'./assets/imgs/0104.svg'},
      { title: 'Gestión de Relación con los Clientes (CRM)', component: 'CrmPage' , icon:'./assets/imgs/0107.svg'},
      { title: 'Desarrollo de Aplicaciones Móbiles (APP)', component: 'AppPage' , icon:'./assets/imgs/0108.svg'},
      { title: 'Manejo de Redes Sociales', component: 'RedessocialesPage' , icon:'./assets/imgs/0109.svg'},
      { title: 'Email Marketing', component: 'EmailmarketingPage' , icon:'./assets/imgs/0110.svg'},
      { title: 'Planeamiento de Recursos Empresariales (ERP)', component: 'ErpPage' , icon:'./assets/imgs/0111.svg'},
      { title: 'Diseño Gráfico', component: 'DiseñoartesPage' , icon:'./assets/imgs/0112.svg'},
      { title: 'Contáctenos', component: 'FetchLlamanosPage' , icon:'./assets/imgs/0113.svg'}
    ];

    this.config=[
      { title: 'usuario', component: 'UsuarioPage', icon:'contact'},
      //{ title: 'Cambio de contraseña', component: 'ChangepasswordPage', icon:'swap'},
      //{ title: 'Historial de cotización', component: 'HistorialCompraPage', icon:'ios-list'},
    ]



    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this._storage.get("email").then((_email) =>{
        this._http.get(`https://firstdb00.firebaseio.com/0/sesion.json`).subscribe((_data)=>{
          for (let key$ in _data){
            if (_data[key$].correo == _email){
              this._nombre = _data[key$].nombre;
              this._correo = _data[key$].correo;
            }
          }
        });
      });


      statusBar.styleDefault();
      splashScreen.hide();



    });
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }

  logout(){
      this._menu.close();
      this.auth.signOut();
      this.nav.setRoot('LoginPage');
  }


  openPageRight(page) {
    this.nav.setRoot(page.component);

  }

  cargarlista(){
    this._storage.get("email").then((_email) =>{
      this._http.get(`https://firstdb00.firebaseio.com/0/sesion.json`).subscribe((_data)=>{
        for (let key$ in _data){
          if (_data[key$].correo == _email){
            if(_data[key$].productos){
              this._key = key$;
              for (let _key$ in _data[key$].productos){
                let _producto: producto = new producto();
                _producto.id = _key$;
                _producto.comentario = _data[key$].productos[_key$].comentario;
                _producto.descripcion = _data[key$].productos[_key$].descripcion;
                _producto.plan = _data[key$].productos[_key$].plan;
                _producto.producto = _data[key$].productos[_key$].producto;
                _producto.subtipo = _data[key$].productos[_key$].subtipo;
                _producto.tipo = _data[key$].productos[_key$].tiposervicio;
                _producto.unidades = _data[key$].productos[_key$].unidades;
                this._productos.push(_producto);
              }
            }
          }
        }
      });
    });
  }
/**
  quitarElemento(elemento$){
    this._http.delete(`https://firstdb00.firebaseio.com/0/sesion/${this._key}/${elemento$}.json`).subscribe((_data) => {
      this._productos = new Array<producto>();
      for (let _key$ in _data[this._key].productos){
        let _producto: producto = new producto();
        _producto.id = _key$;
        _producto.comentario = _data[this._key].productos[_key$].comentario;
        _producto.descripcion = _data[this._key].productos[_key$].descripcion;
        _producto.plan = _data[this._key].productos[_key$].plan;
        _producto.producto = _data[this._key].productos[_key$].producto;
        _producto.subtipo = _data[this._key].productos[_key$].subtipo;
        _producto.tipo = _data[this._key].productos[_key$].tiposervicio;
        _producto.unidades = _data[this._key].productos[_key$].unidades;
        this._productos.push(_producto);
      }
    });
  }   **/
}

export class producto{
  id:string;
  comentario: string;
  descripcion:string;
  plan: string;
  producto: string;
  subtipo:string;
  tipo: string;
  unidades:string;
  duracion: string;
}
