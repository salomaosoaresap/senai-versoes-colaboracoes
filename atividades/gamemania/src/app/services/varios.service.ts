import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Carousel } from '../models/carousel';
import { Noticia } from '../models/noticia';
import { Promocao } from '../models/promocao';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class VariosService {

  url = "http://localhost:3000"  
  constructor(private httpClient:HttpClient) { }

  getNoticias(): Observable<Noticia[]> {
      return this.httpClient.get<Noticia[]>(this.url+'/noticias')
    }
  getPromocao(): Observable<Promocao[]> {
      return this.httpClient.get<Promocao[]>(this.url+'/promocao')
    }
  getCarousel(): Observable<Carousel[]> {
      return this.httpClient.get<Carousel[]>(this.url+'/carousel')
    }
  
  login(user: User): Observable<any>{
    return this.httpClient.post(this.url+'/login',JSON.stringify(user),{
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: "response"
    })
  }  


  

}
