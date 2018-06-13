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

    pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      { title: 'Dominios', component: 'FetchDominiosPage' },
      { title: 'Alojamientos', component: 'FetchAlojamientosPage' },
      { title: 'Seguridad', component: 'SeguridadPage' },
      { title: 'Nube', component: 'CloudPage' },
      { title: 'Constructor Sitios Web', component: 'SitioWebPage' },
      { title: 'Combos', component: 'FetchCombosPage' },
      { title: 'Llamanos', component: 'FetchLlamanosPage' }
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
