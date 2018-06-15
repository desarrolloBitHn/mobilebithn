import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
    rootPage:any = 'InicioPage';


    pages: Array<{title: string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      { title: 'Dominios', component: 'FetchDominiosPage', icon:'appbithn-domainservice'},
      { title: 'Alojamientos', component: 'FetchAlojamientosPage' , icon:'appbithn-server'},
      { title: 'Seguridad', component: 'SeguridadPage' , icon:'appbithn-securityservice'},
      { title: 'Nube', component: 'CloudPage' , icon:'appbithn-cloudserver'},
      { title: 'Correo', component: 'CorreoPage' , icon:'mail'},
      { title: 'Constructor Sitios Web', component: 'SitioWebPage' , icon:'appbithn-websiteservice'},
      { title: 'Combos', component: 'FetchCombosPage' , icon:'appbithn-discount'},
      { title: 'Llamanos', component: 'FetchLlamanosPage' , icon:'call'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
