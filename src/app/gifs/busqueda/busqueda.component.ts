import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  
  buscar (){
  
    const value = this.txtBuscar.nativeElement.value;
    this.gifsService.buscarGifs(value);
    this.txtBuscar.nativeElement.value='';
    

    
  }

}
