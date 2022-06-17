import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from 'src/app/gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService:GifsServiceService) { }
   
  get historial(){
    return this.gifsService.historial
  }
  ngOnInit(): void {
    
  }

  buscar(h:string){
     this.gifsService.buscarGifs(h)
  }

}
