import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FetchRegistroDominioPage } from './fetch-registro-dominio';
import { FormsModule } from '@angular/forms';
import { FilterRegistroDominioPipe } from '../../pipes/filter-registro-dominio/filter-registro-dominio';
@NgModule({
  declarations: [
    FetchRegistroDominioPage,
    FilterRegistroDominioPipe
  ],
  imports: [
    IonicPageModule.forChild(FetchRegistroDominioPage),
    FormsModule
  ],
})
export class FetchRegistroDominioPageModule {}
