import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-gifs-list',
  templateUrl: './gifs-list.component.html',
  styleUrls: ['./gifs-list.component.scss']
})
export class GifsListComponent implements OnInit {

  constructor(private gifsService:GifsServiceService) { }

  get resultados(){
    return this.gifsService.resultados
  }
  ngOnInit(): void {
  }

}
