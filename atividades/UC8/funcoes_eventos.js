//Gera banco local
var db = openDatabase("dbEventos","1.0","Banco de Eventos",4048);
var vqtd_I = 100;
var vVagas = 100;
//cria as tabelas
db.transaction(function(criar){
 //cria tabela de eventos 
   criar.executeSql("CREATE TABLE eventos (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, data DATE NOT NULL, nome STRING (100) NOT NULL, vagas INTEGER NOT NULL DEFAULT (100), palestrante STRING (100) NOT NULL)");
 //cria tabela de participantes
   criar.executeSql("CREATE TABLE participantes (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, nome STRING (100) NOT NULL UNIQUE, idade INTEGER NOT NULL DEFAULT (18))");
 //cria tabela de inscriçoes
   criar.executeSql("CREATE TABLE inscricoes (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, id_evento INTEGER NOT NULL, id_participante NOT NULL)");
 
});

//salvar evento
function salvarEvento(){
     
    let data  = document.getElementById('evData').value;
           data  = new Date(data);
       let hoje  = new Date();    
       let nome  = document.getElementById('evNome').value;
       let vagas = document.getElementById('evVagas').value;
       let palestrante = document.getElementById("evPalestrante").value;
   if (data < hoje){
     alert("Data Inválida!");
   } else if (nome == ""){
     alert("Precisa informar o nome do evento!");
   } else if(vagas == ""){ alert("Informe as Vagas!"); 
   } else if(palestrante == ""){ alert("Informe o Palestrante!");
   } else{
         db.transaction(function(incluir){
         incluir.executeSql("INSERT INTO eventos (data, nome, vagas, palestrante)values(?,?,?,?)",[document.getElementById("evData").value,nome,vagas, palestrante]);
         alert("Gravado com sucesso!");

   });

  }
}
//gravar participantes
function salvarParticipante(){
  
       let nome  = document.getElementById('ptNome').value;
       let idade = document.getElementById('ptIdade').value;
   if (idade < 18){
     alert("Participante precisa ser maior de 18 anos!");
   } else if (nome == ""){
     alert("Informe o nome do Participante!");
   } else {
         db.transaction(function(incluir){
         incluir.executeSql("INSERT INTO participantes(nome, idade)values(?,?)",[nome,idade]);
         alert("Gravado com sucesso!");
   });

  }
}


//exluir evento pelo id
function excluirEvento(){
    let vcodEvento = document.getElementById("codEvento").value;
    db.transaction(function(ex){
       ex.executeSql("DELETE FROM eventos where id = ?",[vcodEvento]);
    }
    );
}


//Função que retorna a data atual
function pegarDataAtual(){
    data = new Date();
    document.getElementById('evNome').value = "2022-02-21";//data.getFullYear()+'-'+data.getMonth()+'-'+data.getDay(); 
    //data.getDay()+'/'+data.getMonth()+'/'+data.getFullYear();
 }

//carregar valores nos combos
function carregarListas(){
   //pega listas
   var lEventos                     = document.getElementById("icEventos");
   var lParticipantes               = document.getElementById("icParticipantes");
   //limpar listas
   lEventos.options.length         = 0;
   lParticipantes.options.length   = 0;
   
   //carrega dados na lista de eventos
   db.transaction(function(tx){
     tx.executeSql("SELECT id, nome from eventos order by nome",[],function(tx,resultado){
       var rows = resultado.rows;
       for(i = 0; i < rows.length; i++){
         option = new Option(rows[i].nome,rows[i].id);
         lEventos.options[lEventos.options.length] = option;
       }
      });

    }, null);

   //carrega dados na lista de Participantes
   db.transaction(function(tx){
    tx.executeSql("SELECT id, nome from participantes order by nome",[],function(tx,resultado){
      var rows = resultado.rows;
      for(i = 0; i < rows.length; i++){
        option = new Option(rows[i].nome,rows[i].id);
        lParticipantes.options[lParticipantes.options.length] = option;
       }
     });

    }, null);
}

function gravarInscricao(){
     let vcodEvento         = document.getElementById("icEventos").value;
     let vcodParticipante   = document.getElementById("icParticipantes").value;
   //pega quant de inscriçoes
   db.transaction(function(tx){
     tx.executeSql("SELECT count(id_evento) from inscricoes where id_evento = ?",[vcodEvento],function(tx,resultado){
        var rows = resultado.rows;
        vqtd_I = rows.length - 1;
     tx.executeSql("SELECT vagas from eventos where id = ?",[vcodEvento],function(tx,resultado){
            var rows = resultado.rows;
            vVagas = rows[0].vagas;
           if (vVagas > vqtd_I){
             tx.executeSql("INSERT into inscricoes (id_evento, id_participante)values(?,?);",[vcodEvento,vcodParticipante]);
             alert("Inscrição realizada com sucesso!");
             }else{alert("Vagas esgotadas para o evento informado!");}
        });
    });
    }, null);
}

function listagem(){
    var registros = document.getElementById("regListagem");
    db.transaction(function(tx){
        tx.executeSql("SELECT e.nome as evento, e.palestrante as palestrante, p.nome as participante from inscricoes i left join eventos e on(i.id_evento = e.id) left join participantes p on(i.id_participante = p.id) order by e.nome, p.nome",[],function(tx,resultado){
          var rows = resultado.rows;
          var tr = '';
          for(i = 0; i < rows.length; i++){
            /*let tr = registros.innerHTML();
            let td_1 = tr.insertCell();
            let td_2 = tr.insertCell();
            let td_3 = tr.insertCell();
            td_1.innerText = rows[i].evento;
            td_2.innerText = rows[i].palestrante;
            td_3.innerText = rows[i].participante;
            */
            tr += '<tr>';
              tr += '<td>'+rows[i].evento+'</td>';
              tr += '<td>'+rows[i].palestrante+'</td>';
              tr += '<td>'+rows[i].participante+'</td>';
              tr += '</tr>';
//        console.log(rows[i].evento+" - "+rows[i].palestrante+" - "+rows[i].participante);     
            }
         registros.innerHTML = tr;  
   });
    
        }, null);

}


