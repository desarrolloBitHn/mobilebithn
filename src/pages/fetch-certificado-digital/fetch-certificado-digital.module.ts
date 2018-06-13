import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FetchCertificadoDigitalPage } from './fetch-certificado-digital';

@NgModule({
  declarations: [
    FetchCertificadoDigitalPage,
  ],
  imports: [
    IonicPageModule.forChild(FetchCertificadoDigitalPage),
  ],
})
export class FetchCertificadoDigitalPageModule {}
