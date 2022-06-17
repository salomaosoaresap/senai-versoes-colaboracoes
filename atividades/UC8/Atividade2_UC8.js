//Sistema de Eventos
//Cadastra evento

let nomeEvento      = "Evento de Teste";
let dataEvento      = new Date("2022-02-20");
let Hoje            = new Date();
let palestrante     = "Fulano de Tal";

//valida data do evento
  if (dataEvento < Hoje){
    console.log("Data inválida");
    }else{
    console.log("Registra evento na base de dados");
    }

// cadastra participante
let nomePart        = "Participante";
let idadePart       = 14;    
//valida idade do participante
   if (idadePart < 18){
      console.log("Participante precisa ser maior de idade!");
     }else{
      console.log("Registra participante na base de dados");   
    }

//realiza inscrição
let qtdInscritos = 99;
   if(qtdInscritos >= 100){
      console.log("Não há mais vagas nesse evento!");
     }else{
      console.log("Realiza inscrição no evento.")   
    }

//Listagem
let inscricoes = [{evento:"Evento1",palestrante:"Fulano de Tal",participante:"Beltrano"},{evento:"Aba de Eventos",palestrante:"Feliphe de Tal",participante:"Pedro Bial"}];
   for(i = 0; i < inscricoes.length; i++){
      console.log(inscricoes[i].evento+" - "+inscricoes[i].palestrante+" - "+inscricoes[i].participante);  
    }
