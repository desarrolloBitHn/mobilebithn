import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SitioWebPage } from './sitio-web';

@NgModule({
  declarations: [
    SitioWebPage,
  ],
  imports: [
    IonicPageModule.forChild(SitioWebPage),
  ],
})
export class SitioWebPageModule {}
