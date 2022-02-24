//Sistema de contagem e classificação

let qtdAlunos = 10;
let lista = [];
//coloca alunos na lista
for (i = 0; i < qtdAlunos; i++){
    lista.push("Aluno"+i);
    }
  
if (lista.length == 0){console.log("Lista está vazia!");}else{
        for (i = 0; i < lista.length; i++){
        if( (i%2) == 0){
            console.log("O número é par ("+lista[i]+")");
        }else {
            console.log("O número é ímpar ("+lista[i]+")");
        }
        }

    }

for (nome of lista){console.log(`Essa pessoa se chama ${nome}`)}
