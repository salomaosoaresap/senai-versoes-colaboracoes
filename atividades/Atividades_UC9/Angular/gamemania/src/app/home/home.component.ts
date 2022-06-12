import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  iconlogin = faUser;
  images = ['assets/banner_pilotos.png','assets/banner_lol.png','assets/banner_cs.png','asstes/freefire.jpg'];
  listaCarousel = [
    {
      codigo: 1,
      titulo: "A liga da F1 em destaque!",
      descricao: "Entre para a liga da F1 e conheça as mais novas aventuras.",
      imagem: "assets/banner_pilotos.png",
      link:"https://www.techtudo.com.br/listas/2022/04/5-eletronicos-e-acessorios-essenciais-para-gravar-um-podcast.ghtml",
    },
    {
      codigo: 2,
      titulo: "League of Legends",
      descricao: "Foi lançado em outubro de 2009 para Microsoft Windows e em março de 2013 para macOS.",
      imagem: "assets/banner_lol.png",
      link:"https://www.techtudo.com.br/listas/2022/04/5-eletronicos-e-acessorios-essenciais-para-gravar-um-podcast.ghtml",
    },
    {
      codigo: 3,
      titulo: "Counter-Strike: Global",
      descricao: "Counter-Strike: Global Offensive é um jogo online desenvolvido pela Valve Corporation e pela Hidden Path Entertainment.",
      imagem: "assets/banner_cs.png",
      link:"https://www.techtudo.com.br/listas/2022/04/5-eletronicos-e-acessorios-essenciais-para-gravar-um-podcast.ghtml",
    },
    {
      codigo: 4,
      titulo: "Garena Free Fire",
      descricao: "Free Fire é um jogo eletrônico mobile de ação-aventura do gênero battle royale, criado pela desenvolvedora vietnamita 111dots Studio e publicado pela Garena.",
      imagem: "assets/freefire.jpg",
      link:"https://www.techtudo.com.br/listas/2022/04/5-eletronicos-e-acessorios-essenciais-para-gravar-um-podcast.ghtml",
    }
  
  ];

listaNoticias = [
  {
    codigo: 1,
    titulo: "Ranking revela celulares 5G mais populares do mundo; veja top 10",
    descricao: "Intel Core i3-9100 Box LGA 1151 4.2Ghz 6MB",
    data: "01/01/2022",
    imagem: "assets/noticia01.webp",
    link:"https://www.techtudo.com.br/noticias/2022/04/samsung-domina-venda-de-celular-5g-no-planeta-veja-o-ranking.ghtml",
  },
  {
    codigo: 2,
    titulo: "Sete eletrônicos que falham justamente quando precisamos deles",
    descricao: "Sete eletrônicos que falham",
    data: "01/01/2022",
    imagem: "assets/noticia02.webp",
    link:"https://www.techtudo.com.br/listas/2022/04/sete-eletronicos-que-falham-justamente-quando-precisamos-deles.ghtml",
  },
  {
    codigo: 3,
    titulo: "Como desaparecer do WhatsApp sem desinstalar o app? Veja 5 maneiras",
    descricao: "Como desaparecer do WhatsApp",
    data: "01/01/2022",
    imagem: "assets/noticia03.webp",
    link:"https://www.techtudo.com.br/listas/2022/04/como-desaparecer-do-whatsapp-sem-desinstalar-o-app-veja-5-maneiras.ghtml",
  },
  {
    codigo: 4,
    titulo: "Veja 10 jogos nostálgicos que fizeram sucesso e merecem remake",
    descricao: "Veja 10 jogos nostálgicos que fizeram sucesso e merecem remake",
    data: "01/01/2022",
    imagem: "assets/noticia04.webp",
    link:"https://www.techtudo.com.br/listas/2022/04/10-jogos-nostalgicos-que-fizeram-sucesso-e-merecem-remake.ghtml",
  },
  {
    codigo: 5,
    titulo: "Calculadora informa quantidade de carne necessária para churrasco; saiba usar",
    descricao: "Calculadora informa quantidade",
    data: "01/01/2022",
    imagem: "assets/noticia05.webp",
    link:"https://www.techtudo.com.br/dicas-e-tutoriais/2022/04/como-calcular-carne-para-churrasco-site-faz-calculo-automaticamente.ghtml",
  },
  {
    codigo: 6,
    titulo: "Conheça os itens essenciais para gravar um podcast",
    descricao: "Conheça os itens essenciais para gravar um podcast",
    data: "01/01/2022",
    imagem: "assets/noticia06.webp",
    link:"https://www.techtudo.com.br/listas/2022/04/5-eletronicos-e-acessorios-essenciais-para-gravar-um-podcast.ghtml",
  }
];

listaPromocao = [
  {
    codigo: 1,
    titulo: "PC Gamer 01",
    descricao: "Intel Core i3-9100 Box LGA 1151 4.2Ghz 6MB",
    imagem: "assets/pc01.png",
    desc:"PC Gamer 01",
    valor:"R$ 3.500,00"
  },
  {
    codigo: 2,
    titulo: "PC Gamer 02",
    descricao: "Pc Gamer G-Fire Htg-737 Intel G6400 8Gb (GTX 1650 4Gb) SSD 240Gb 500W",
    imagem: "assets/pc02.jpg",
    desc:"Foto de uma jogadora profissional",
    valor: "R$ 1.500,00"
  },
  {
    codigo: 3,
    titulo: "PC Gamer 03",
    descricao: "Pc Gamer Completo G-Fire Htg-432 AMD A10 9700 8Gb (Radeon R7 2Gb) SSD 120Gb Monitor 18,5",
    imagem: "assets/pc03.png",
    desc:"Foto de uma jogadora profissional",
    valor: "R$ 1.500,00"
  },
  {
    codigo: 4,
    titulo: "PC Gamer 04",
    descricao: "Pc Gamer G-Fire Completo Htgw-449 Intel G5400 8Gb (Radeon Rx 550 2Gb) SSD 120Gb 21 Windows 10",
    imagem: "assets/pc04.png",
    desc:"Foto de uma jogadora profissional",
    valor: "R$ 1.500,00"
  },
  {
    codigo: 5,
    titulo: "PC Gamer 05",
    descricao: "Pc Gamer G-Fire Htgw-140 Intel Core i5 10ª Geração 8GB (SEM PLACA DE VÍDEO) SSD 256GB NVMe 700W 80+ W10",
    imagem: "assets/pc05.jpg",
    desc:"Foto de uma jogadora profissional",
    valor: "R$ 1.500,00"
  },
  {
    codigo: 6, 
    titulo: "PC Gamer 06",
    descricao: "Pc Gamer G-Fire Htgw-141 Intel Core i5 10ª Geração 16GB (SEM PLACA DE VÍDEO) SSD 512GB NVMe 700W 80+ W10",
    imagem: "assets/pc06.jpg",
    desc:"",
    valor: "R$ 1.500,00"
  }
]



}
