import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {FetchDominiosPage} from './fetch-dominios';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    FetchDominiosPage,
  ],
  imports: [
    IonicPageModule.forChild(FetchDominiosPage),
    PipesModule
  ],
})
export class FetchDominiosPageModule {
}
