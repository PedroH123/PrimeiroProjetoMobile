
var numero;
var operacao;
var resultado;

$(document)

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

  }  
})


$(document).on("click","#1",function(){
  numero = 1;
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
})

$(document).on("click","#2",function(){
  numero = 2;
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
})
$(document).on("click","#3",function(){
  numero = 3;
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
})
$(document).on("click","#4",function(){
  numero = 4;
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
})
$(document).on("click","#5",function(){
  numero = 5;
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
})
$(document).on("click","#6",function(){
  numero = 6;
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
})
$(document).on("click","#7",function(){
  numero = 7;
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
})
$(document).on("click","#8",function(){
  numero = 8;
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
})
$(document).on("click","#9",function(){
  numero = 9;
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
})
$(document).on("click","#0",function(){
  numero = 0;
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
})
$(document).on("click","#ponto",function(){
  numero = ".";
  numero = $("#resultado").val() + numero;
  $("#resultado").val(numero);
})



$(document).on("click","#somar",function(){
operacao = " + ";

operacao = $("#resultado").val() + operacao;

$("#resultado").val(operacao);
})

$(document).on("click","#subtrair",function(){
operacao = " - ";

operacao = $("#resultado").val() + operacao;

$("#resultado").val(operacao);
})

$(document).on("click","#dividir",function(){
operacao = " / ";

operacao = $("#resultado").val() + operacao;

$("#resultado").val(operacao);
})

$(document).on("click","#multiplicar",function(){
operacao = " * ";

operacao = $("#resultado").val() + operacao;

$("#resultado").val(operacao);
})

$(document).on("click","#potenciacao",function(){
operacao = " ^ ";

operacao = $("#resultado").val() + operacao;

$("#resultado").val(operacao);
})

$(document).on("click","#porcentagem",function(){
operacao = " % ";

operacao = $("#resultado").val() + operacao;

$("#resultado").val(operacao);
})

$(document).on("click","#raiz",function(){
operacao = " √ ";

operacao = $("#resultado").val() + operacao;

$("#resultado").val(operacao);
})

$(document).on("click","#restoDivisao",function(){
operacao = " ÷ ";

operacao = $("#resultado").val() + operacao;

$("#resultado").val(operacao);
})



