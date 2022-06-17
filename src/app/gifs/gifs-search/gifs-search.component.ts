import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-gifs-search',
  templateUrl: './gifs-search.component.html',
  styleUrls: ['./gifs-search.component.scss']
})
export class GifsSearchComponent {

  constructor(private gifsservice: GifsServiceService){}


  @ViewChild('txtbuscar') txtbuscar!:ElementRef<HTMLInputElement>;

  buscar(){
    const query=this.txtbuscar.nativeElement.value
    this.gifsservice.buscarGifs(query)
    this.txtbuscar.nativeElement.value=''
  }
}
