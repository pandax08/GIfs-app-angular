import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { GifsListComponent } from './gifs-list/gifs-list.component';
import { GifsSearchComponent } from './gifs-search/gifs-search.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    GifsListComponent,
    GifsSearchComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
    
  ],
  exports:[
    GifsPageComponent
  ],
  
})
export class GifsModule { }
