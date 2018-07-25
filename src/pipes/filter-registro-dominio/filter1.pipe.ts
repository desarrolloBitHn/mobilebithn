import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtroprueba',
    pure: false
})
export class FiltroPruebaPipe implements PipeTransform {
  transform(items: any[], myfilter: string): any {
    if (myfilter == null){
      return items.filter((item) => item.descripcion);
    } else {
      return items.filter((item) => item.descripcion.indexOf(myfilter) !== -1);
    }

  }
}
