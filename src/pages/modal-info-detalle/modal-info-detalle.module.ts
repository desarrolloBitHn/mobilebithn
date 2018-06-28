import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalInfoDetallePage } from './modal-info-detalle';

@NgModule({
  declarations: [
    ModalInfoDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalInfoDetallePage),
  ],
})
export class ModalInfoDetallePageModule {}
