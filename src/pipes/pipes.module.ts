import { NgModule } from '@angular/core';
import { FilterRegistroDominioPipe } from './filter-registro-dominio/filter-registro-dominio';
import { FiltroPruebaPipe } from './filter-registro-dominio/filter1.pipe';
@NgModule({
	declarations: [FilterRegistroDominioPipe, FiltroPruebaPipe],
	imports: [],
	exports: [FilterRegistroDominioPipe, FiltroPruebaPipe]
})
export class PipesModule {}
