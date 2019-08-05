
var numero;
var operacao;
var resultado;
var operador = false;
var numeral = false;
var raiz = false;

$(document).on("click","#limpar",function(){
  
  $("#resultado").val("");
  operador = false;
  numeral = false;
  raiz = false;

})

$(document).on("click","#igual",function(){

  var valorTotal2 = $("#resultado").val();
  var valorTotal = valorTotal2.split(" ");

  switch(valorTotal[1]){

    case "+":
       resultado = parseInt(valorTotal[0]) + parseInt(valorTotal[2]);
       $("#resultado").val(resultado);
    break;
    case "-":
       resultado = parseInt(valorTotal[0]) - parseInt(valorTotal[2]);
       $("#resultado").val(resultado);
    break;
    case "X":
       resultado = parseInt(valorTotal[0]) * parseInt(valorTotal[2]);
       $("#resultado").val(resultado);
    break;
    case "^":
       resultado = Math.pow(parseInt(valorTotal[0]),parseInt(valorTotal[2]));
       $("#resultado").val(resultado);
    break;
    case "%":
       resultado = parseInt(valorTotal[0]) / 100;
       $("#resultado").val(resultado);
    break;
    case "√":
       resultado = Math.sqrt(parseInt(valorTotal[0]));
       $("#resultado").val(resultado);
    break;
    case "÷":
       resultado = parseInt(valorTotal[0]) % parseInt(valorTotal[2]);
       $("#resultado").val(resultado);
    break;

    operador = false;
    numeral = false;
    raiz = false;
  }  
})


$(document).on("click","#1",function(){
  if(raiz == false){
    numero = 1;
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
  numeral = true;
  }
})

$(document).on("click","#2",function(){
  if(raiz == false){
    numero = 2;
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
    numeral = true;
  }
})
$(document).on("click","#3",function(){
  if(raiz == false){
    numero = 3;
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
    numeral = true;
  }
})
$(document).on("click","#4",function(){
  if(raiz == false){
    numero = 4;
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
    numeral = true;
  }
})
$(document).on("click","#5",function(){
  if(raiz == false){
    numero = 5;
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
    numeral = true;
  }
})
$(document).on("click","#6",function(){
  if(raiz == false){
    numero = 6;
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
    numeral = true;
  }
})
$(document).on("click","#7",function(){
  if(raiz == false){
    numero = 7;
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
    numeral = true;
  }
})
$(document).on("click","#8",function(){
  if(raiz == false){
    numero = 7;
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
    numeral = true;
  }   
})
$(document).on("click","#9",function(){
  if(raiz == false){
    numero = 9;
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
  numeral = true;
  }
})
$(document).on("click","#0",function(){
  if(raiz == false){
    numero = 0;
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
  numeral = true;
  }
})
$(document).on("click","#ponto",function(){
  if(raiz == false){
    numero = ".";
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
  numeral = true;
  }
})



$(document).on("click","#somar",function(){

  if(operador == false && numeral == true){
  operacao = " + ";

  operacao = $("#resultado").val() + operacao;

  $("#resultado").val(operacao);

  operador = true;
  }

})

$(document).on("click","#subtrair",function(){
  
  if(operador == false && numeral == true){
    operacao = " - ";

    operacao = $("#resultado").val() + operacao;

    $("#resultado").val(operacao);

    operador = true;
  }
  else if($("#resultado").val() == ""){
    operacao = "-";

    operacao = $("#resultado").val() + operacao;

    $("#resultado").val(operacao);

  }
  

})

$(document).on("click","#dividir",function(){
operacao = " / ";

if(operador == false && numeral == true){
  operacao = $("#resultado").val() + operacao;

$("#resultado").val(operacao);

operador = true;
}
})

$(document).on("click","#multiplicar",function(){
operacao = " X ";

if(operador == false && numeral == true){
  operacao = $("#resultado").val() + operacao;

$("#resultado").val(operacao);

operador = true;
}

})

$(document).on("click","#potenciacao",function(){
operacao = " ^ ";

if(operador == false && numeral == true) {
operacao = $("#resultado").val() + operacao;

$("#resultado").val(operacao);

operador = true;
}

})

$(document).on("click","#porcentagem",function(){
operacao = " % ";

if(operador == false && numeral == true){
operacao = $("#resultado").val() + operacao;

$("#resultado").val(operacao);

operador = true;
}

})

$(document).on("click","#raiz",function(){
operacao = " √ ";

if(operador == false && numeral == true && raiz == false){
operacao = $("#resultado").val() + operacao;

$("#resultado").val(operacao);

operador = true;
raiz = true;

}

})

$(document).on("click","#restoDivisao",function(){
operacao = " ÷ ";

if(operador == false && numeral == true){
  operacao = $("#resultado").val() + operacao;

$("#resultado").val(operacao);

operador = true;
}

})



