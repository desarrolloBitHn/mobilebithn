import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FetchAlojamientosPage } from './fetch-alojamientos';

@NgModule({
  declarations: [
    FetchAlojamientosPage,
  ],
  imports: [
    IonicPageModule.forChild(FetchAlojamientosPage),
  ],
})
export class FetchAlojamientosPageModule {}
