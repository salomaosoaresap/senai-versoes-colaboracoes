var listaDePecas = ["or","Motor","Filtro de Ar","Amortecedor","Motor","Filtro de Ar","Amortecedor","Motor","Filtro de Ar","Amortecedor","Motor","Filtro de Ar"] ;

let peso = 50;

if (peso < 100){
    console.log("A peça deve pesar no mínimo 100g!");
}else{
    console.log("A peça tem o peso adequado!"); 
}

//Caixa suporta até 10

if (listaDePecas.length < 10){
    console.log("É possível cadastrar mais peças!");
}else{
    console.log("Não tem mais espaço na lista!");
}

//Nome inferior a 3 caracteres

// vNome = listaDePecas[0];   caso queira pegar valores no array
vNome = "Teste";
if (vNome.length < 3){
    console.log("O nome da peça deve conter mais de 2 caracteres! Tente novamente!");    
}else{
    console.log("O nome da peça está adequado!");    
}
