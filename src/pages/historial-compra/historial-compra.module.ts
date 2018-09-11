import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistorialCompraPage } from './historial-compra';

@NgModule({
  declarations: [
    HistorialCompraPage,
  ],
  imports: [
    IonicPageModule.forChild(HistorialCompraPage),
  ],
})
export class HistorialCompraPageModule {}
