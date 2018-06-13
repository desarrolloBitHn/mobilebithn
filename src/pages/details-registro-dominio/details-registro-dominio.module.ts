import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsRegistroDominioPage } from './details-registro-dominio';

@NgModule({
  declarations: [
    DetailsRegistroDominioPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsRegistroDominioPage),
  ],
})
export class DetailsRegistroDominioPageModule {}
