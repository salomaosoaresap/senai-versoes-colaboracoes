import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from '../models/carousel';
import { Noticia } from '../models/noticia';
import { Promocao } from '../models/promocao'
import { VariosService } from '../services/varios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private servicos: VariosService) { }

  ngOnInit(): void {
    this.carregarNoticias();
    this.carregarPromocao();
    this.carregarCarousel();
  }

  carregarNoticias(){
    this.servicos.getNoticias().subscribe( (noticiasRecebidas: Noticia[]) => {
      this.listaNoticias = noticiasRecebidas;
     // console.log(this.listaNoticias);
    }) 
  }
  carregarPromocao(){
    this.servicos.getPromocao().subscribe( (Promocoes: Promocao[]) => {
      this.listaPromocao = Promocoes;
     // console.log(this.listaPromocao);
    }) 
  }

  carregarCarousel(){
    this.servicos.getCarousel().subscribe( (Carousels: Carousel[]) => {
      this.listaCarousel = Carousels;
    //  console.log(this.listaCarousel);
    }) 
  }

  iconlogin = faUser;
//  images = ['assets/banner_pilotos.png','assets/banner_lol.png','assets/banner_cs.png','asstes/freefire.jpg'];

  listaCarousel = [] as Carousel[];
  listaNoticias = [] as Noticia[];
  listaPromocao = [] as Promocao[];
  usuario = this.servicos.nomeusuario;
}
