import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import {FetchDominiosPage} from './fetch-dominios';
import { CuerpomodalComponent } from '../../components/cuerpomodal/cuerpomodal';
import { FilterRegistroDominioPipe } from '../../pipes/filter-registro-dominio/filter-registro-dominio';

@NgModule({
  declarations: [
    CuerpomodalComponent,
    FetchDominiosPage,
    FilterRegistroDominioPipe
  ],
  imports: [
    IonicPageModule.forChild(FetchDominiosPage),
  ],
})
export class FetchDominiosPageModule {
}
