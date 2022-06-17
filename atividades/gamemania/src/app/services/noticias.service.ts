import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Carousel } from '../models/carousel';
import { Noticia } from '../models/noticia';
import { Promocao } from '../models/promocao';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

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
   
}
