import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  private _historial:string[]=[]
  private _resultados:any[]=[]
  private servicioUrl:string='https://api.giphy.com/v1/gifs'
  
  
  get historial(){
    return [...this._historial];
  }

  get resultados(){
    return [...this._resultados]
  }

  buscarGifs(query:string){
    this._historial=this._historial.splice(0,10)
    if(!this._historial.includes(query.toLowerCase()) && query.trim()!==''){
      
      this._historial.unshift(query.toLowerCase())
      localStorage.setItem('historial',JSON.stringify(this._historial))
           
    }

    const params = new HttpParams()
  .set('api_key','DRvSs7Xairm1lm49B2vMX7jHDwg65QyK')
  .set('limit','10')
  .set('q',query)

  
    this.http.get(`${this.servicioUrl}/search?`,{params})
    .subscribe((resp:any)=>{
        this._resultados=resp.data
        
        localStorage.setItem('resultados',JSON.stringify(resp.data))
      })
  }

  constructor(private http:HttpClient) { 
    //solo se ejecuta la primera vez que el servicio es utilizado
    /* if(localStorage.getItem('historial')){
      this._historial=JSON.parse(localStorage.getItem('historial')!)
    } */
    this._historial=JSON.parse(localStorage.getItem('historial')!)|| []
    this._resultados=JSON.parse(localStorage.getItem('resultados')!)|| []

  }
}
