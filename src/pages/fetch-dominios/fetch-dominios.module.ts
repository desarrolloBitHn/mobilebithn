import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {FetchDominiosPage} from './fetch-dominios';
import { FilterRegistroDominioPipe } from '../../pipes/filter-registro-dominio/filter-registro-dominio';

@NgModule({
  declarations: [
    FetchDominiosPage,
    FilterRegistroDominioPipe
  ],
  imports: [
    IonicPageModule.forChild(FetchDominiosPage),
  ],
})
export class FetchDominiosPageModule {
}
