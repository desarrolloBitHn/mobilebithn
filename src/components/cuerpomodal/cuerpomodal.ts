import { Component } from '@angular/core';

/**
 * Generated class for the CuerpomodalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cuerpo-modal',
  templateUrl: 'cuerpomodal.html'
})
export class CuerpomodalComponent {

  text: string;

  constructor() {
    console.log('Hello CuerpomodalComponent Component');
    this.text = 'Este soy yo';
  }

}
