import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCotizarPage } from './modal-cotizar';

@NgModule({
  declarations: [
    ModalCotizarPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCotizarPage),
  ],
})
export class ModalCotizarPageModule {}
