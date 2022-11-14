import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { BusquedaComponent } from './busqueda/busqueda.component';



@NgModule({
  declarations: [
    GifsPageComponent,BusquedaComponent,
    ResultadosComponent, 
  ],
  exports:[GifsPageComponent],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
