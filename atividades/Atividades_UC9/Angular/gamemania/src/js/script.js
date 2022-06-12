// import  { listaPromocao } from '../dados/dados.js';

$(document).ready(function () {

  // $("#carrosel img:eq(0)").addClass("banner-ativo").show()

  // setInterval(slide, 3000)

  // function slide() {
  //   if ($(".banner-ativo").next().length) {
  //     $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
  //   } else {
  //     $(".banner-ativo").removeClass().hide()
  //     $("#carrosel img:eq(0)").addClass("banner-ativo").show()
  //   }
  // }

  $("#barras").click(function () {
    $("#menu").toggleClass("menu-ativo")
    //  if ($("#menu").hasClass("menu-ativo")) {
    //   $("#menu").removeClass("menu-ativo")
    // } else {
    //   $("#menu").addClass("menu-ativo")
    // }
  })
})

//let lista = dados.listaPromocao;
// console.log(listaPromocao);
let listaPromocao = [
  {
    codigo: 1,
    titulo: "PC Gamer 01",
    descricao: "Intel Core i3-9100 Box LGA 1151 4.2Ghz 6MB",
    imagem: "img/pc01.png",
    desc:"PC Gamer 01",
    valor:"R$ 3.500,00"
  },
  {
    codigo: 2,
    titulo: "PC Gamer 02",
    descricao: "Pc Gamer G-Fire Htg-737 Intel G6400 8Gb (GTX 1650 4Gb) SSD 240Gb 500W",
    imagem: "img/pc02.jpg",
    desc:"Foto de uma jogadora profissional",
    valor: "R$ 1.500,00"
  },
  {
    codigo: 3,
    titulo: "PC Gamer 03",
    descricao: "Pc Gamer Completo G-Fire Htg-432 AMD A10 9700 8Gb (Radeon R7 2Gb) SSD 120Gb Monitor 18,5",
    imagem: "img/pc03.png",
    desc:"Foto de uma jogadora profissional",
    valor: "R$ 1.500,00"
  },
  {
    codigo: 4,
    titulo: "PC Gamer 04",
    descricao: "Pc Gamer G-Fire Completo Htgw-449 Intel G5400 8Gb (Radeon Rx 550 2Gb) SSD 120Gb 21 Windows 10",
    imagem: "img/pc04.png",
    desc:"Foto de uma jogadora profissional",
    valor: "R$ 1.500,00"
  },
  {
    codigo: 5,
    titulo: "PC Gamer 05",
    descricao: "Pc Gamer G-Fire Htgw-140 Intel Core i5 10ª Geração 8GB (SEM PLACA DE VÍDEO) SSD 256GB NVMe 700W 80+ W10",
    imagem: "img/pc05.jpg",
    desc:"Foto de uma jogadora profissional",
    valor: "R$ 1.500,00"
  },
  {
    codigo: 6, 
    titulo: "PC Gamer 06",
    descricao: "Pc Gamer G-Fire Htgw-141 Intel Core i5 10ª Geração 16GB (SEM PLACA DE VÍDEO) SSD 512GB NVMe 700W 80+ W10",
    imagem: "img/pc06.jpg",
    desc:"",
    valor: "R$ 1.500,00"
  }
]

let listaNoticias = [
  {
    codigo: 1,
    titulo: "Ranking revela celulares 5G mais populares do mundo; veja top 10",
    descricao: "Intel Core i3-9100 Box LGA 1151 4.2Ghz 6MB",
    data: "01/01/2022",
    imagem: "img/noticia01.webp",
    link:"https://www.techtudo.com.br/noticias/2022/04/samsung-domina-venda-de-celular-5g-no-planeta-veja-o-ranking.ghtml",
  },
  {
    codigo: 2,
    titulo: "Sete eletrônicos que falham justamente quando precisamos deles",
    descricao: "Sete eletrônicos que falham",
    data: "01/01/2022",
    imagem: "img/noticia02.webp",
    link:"https://www.techtudo.com.br/listas/2022/04/sete-eletronicos-que-falham-justamente-quando-precisamos-deles.ghtml",
  },
  {
    codigo: 3,
    titulo: "Como desaparecer do WhatsApp sem desinstalar o app? Veja 5 maneiras",
    descricao: "Como desaparecer do WhatsApp",
    data: "01/01/2022",
    imagem: "img/noticia03.webp",
    link:"https://www.techtudo.com.br/listas/2022/04/como-desaparecer-do-whatsapp-sem-desinstalar-o-app-veja-5-maneiras.ghtml",
  },
  {
    codigo: 4,
    titulo: "Veja 10 jogos nostálgicos que fizeram sucesso e merecem remake",
    descricao: "Veja 10 jogos nostálgicos que fizeram sucesso e merecem remake",
    data: "01/01/2022",
    imagem: "img/noticia04.webp",
    link:"https://www.techtudo.com.br/listas/2022/04/10-jogos-nostalgicos-que-fizeram-sucesso-e-merecem-remake.ghtml",
  },
  {
    codigo: 5,
    titulo: "Calculadora informa quantidade de carne necessária para churrasco; saiba usar",
    descricao: "Calculadora informa quantidade",
    data: "01/01/2022",
    imagem: "img/noticia05.webp",
    link:"https://www.techtudo.com.br/dicas-e-tutoriais/2022/04/como-calcular-carne-para-churrasco-site-faz-calculo-automaticamente.ghtml",
  },
  {
    codigo: 6,
    titulo: "Conheça os itens essenciais para gravar um podcast",
    descricao: "Conheça os itens essenciais para gravar um podcast",
    data: "01/01/2022",
    imagem: "img/noticia06.webp",
    link:"https://www.techtudo.com.br/listas/2022/04/5-eletronicos-e-acessorios-essenciais-para-gravar-um-podcast.ghtml",
  }
]

let listaCarousel = [
  {
    codigo: 1,
    titulo: "Conheça os itens essenciais para gravar um podcast",
    descricao: "Conheça os itens essenciais para gravar um podcast",
    imagem: "assets/banner_pilotos.png",
    link:"https://www.techtudo.com.br/listas/2022/04/5-eletronicos-e-acessorios-essenciais-para-gravar-um-podcast.ghtml",
  },
  {
    codigo: 2,
    titulo: "Conheça os itens essenciais para gravar um podcast",
    descricao: "Conheça os itens essenciais para gravar um podcast",
    imagem: "assets/banner_lol.png",
    link:"https://www.techtudo.com.br/listas/2022/04/5-eletronicos-e-acessorios-essenciais-para-gravar-um-podcast.ghtml",
  },
  {
    codigo: 3,
    titulo: "Conheça os itens essenciais para gravar um podcast",
    descricao: "Conheça os itens essenciais para gravar um podcast",
    imagem: "assets/banner_cs.png",
    link:"https://www.techtudo.com.br/listas/2022/04/5-eletronicos-e-acessorios-essenciais-para-gravar-um-podcast.ghtml",
  },
  {
    codigo: 4,
    titulo: "Conheça os itens essenciais para gravar um podcast",
    descricao: "Conheça os itens essenciais para gravar um podcast",
    imagem: "assets/freefire.jpg",
    link:"https://www.techtudo.com.br/listas/2022/04/5-eletronicos-e-acessorios-essenciais-para-gravar-um-podcast.ghtml",
  }

]



function renderizarPromocoes() {
  let espaco = document.getElementById("espaco-promocoes")

  let template = "";



  for (let index = 0; index < listaPromocao.length; index++) {
    const promocao = listaPromocao[index];

    template += `
    <div class="cardnews">
     <div>
      <img src=${promocao.imagem} alt=${promocao.desc} <br> 
     </div>
     <div>
      <h3>${promocao.titulo}</h3> 
     </div>
     <div>
      <p>${promocao.descricao}</p> 
     </div>
     <div>
      <h1>${promocao.valor}</h1>
     </div>
     <div class="bt-comprar"> 
     <button type="button" class="btn-comprar">COMPRAR</button>
     </div>
    </div >
    `

  }

  espaco.innerHTML = template;

}

function renderizarNoticias() {
  let espaco = document.getElementById("lista-noticias")

  let template = "";

  for (let index = 0; index < listaNoticias.length; index++) {
    const noticia = listaNoticias[index];

    template += `
    <article class="card-noticia">
    <div class="noticia">
      <figure class="img-noticia"> 
        <img src=${noticia.imagem} alt=${noticia.descricao}>
      </figure> 
      <div class="titulo-noticia">
        <h3>
          <a href=${noticia.link}>${noticia.descricao}</a>
        </h3>
        <div class="data-noticia">
          ${noticia.data}
        </div>
      </div>
    </div>  
  </article>
  `;
  }

  espaco.innerHTML = template;

}

function renderizarCarousel() {
  let espaco = document.getElementById("carousel-inner")
  let template = `
    <div class="carousel-item active">
    <img class="d-block w-100" src=${listaCarousel[0].imagem} alt=${listaCarousel[0].descricao}>
    </div>
      `;
  for (let index = 1; index < listaCarousel.length; index++) {
    const lista = listaCarousel[index];
    template += `
     <div class="carousel-item">
      <img class="d-block w-100" src=${lista.imagem} alt=${lista.descricao}>
     </div>
     `;
  }
  espaco.innerHTML = template;
}

let menu = document.getElementById("menu")

function mostrarMenu() {
  if (menu.style.display != "flex") {
    menu.style.display = "flex"
  } else {
    menu.style.display = "none"
  }
}

function mostrarPopup() {
  window.alert("eae parça")
}

let email = document.getElementById("campo-email")

function enviarEmail() {
  let emailDigitado = email.value
  alert("Seu email foi enviado com sucesso!");
}


function renderizar(){
  renderizarCarousel();
  renderizarPromocoes();
  renderizarNoticias();
}
