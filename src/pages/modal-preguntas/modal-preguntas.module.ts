import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPreguntasPage } from './modal-preguntas';

@NgModule({
  declarations: [
    ModalPreguntasPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPreguntasPage),
  ],
})
export class ModalPreguntasPageModule {}
