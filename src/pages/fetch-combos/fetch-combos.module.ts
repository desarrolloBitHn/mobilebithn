import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FetchCombosPage } from './fetch-combos';

@NgModule({
  declarations: [
    FetchCombosPage,
  ],
  imports: [
    IonicPageModule.forChild(FetchCombosPage),
  ],
})
export class FetchCombosPageModule {}
