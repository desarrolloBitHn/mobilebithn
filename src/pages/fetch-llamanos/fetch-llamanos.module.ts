import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FetchLlamanosPage } from './fetch-llamanos';

@NgModule({
  declarations: [
    FetchLlamanosPage,
  ],
  imports: [
    IonicPageModule.forChild(FetchLlamanosPage),
  ],
})
export class FetchLlamanosPageModule {}
