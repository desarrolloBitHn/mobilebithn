import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleAlojamientosPage } from './detalle-alojamientos';

@NgModule({
  declarations: [
    DetalleAlojamientosPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleAlojamientosPage),
  ],
})
export class DetalleAlojamientosPageModule {}
