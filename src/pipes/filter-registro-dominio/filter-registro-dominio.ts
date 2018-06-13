import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FilterRegistroDominioPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'myfilter',
  pure: false
})
export class FilterRegistroDominioPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
   transform(items: any[], myfilter: string): any {
     if (myfilter == null){
       return items.filter((item) => item.descripcion);
     } else {
       return items.filter((item) => item.descripcion.indexOf(myfilter) !== -1);
     }

   }
}
