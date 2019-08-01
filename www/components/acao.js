// This is a JavaScript file

$(document).on("click","#limpar",function(){

  $("#resultado").val("");
  $("#valor1").val("");
    $("#valor2").val("");
  $("#valorX").val("");

})

$(document).on("click","#somar",function(){

  var resultado;

  resultado = parseInt($("#valor1").val()) + parseInt($("#valor2").val());

  $("#resultado").val(resultado);
})

$(document).on("click","#subtrair",function(){

  var resultado;

  resultado = parseInt($("#valor1").val()) - parseInt($("#valor2").val());

  $("#resultado").val(resultado);
})

$(document).on("click","#dividir",function(){

  var resultado;

  resultado = parseInt($("#valor1").val()) / parseInt($("#valor2").val());

  $("#resultado").val(resultado);
})

$(document).on("click","#multiplicar",function(){

  var resultado;

  resultado = parseInt($("#valor1").val()) * parseInt($("#valor2").val());

  $("#resultado").val(resultado);
})

$(document).on("click","#porcentagem",function(){

  var resultado;

  resultado = parseInt($("#valorX").val()) / 100;

  $("#resultado").val(resultado);
})

$(document).on("click","#raiz",function(){

  var resultado;
  
  var valor;

  valor = parseInt($("#valorX").val());

  resultado = Math.sqrt(valor);

  $("#resultado").val(resultado);
})

$(document).on("click","#potenciacao",function(){

  var resultado;
  
  var valor;
  var valor2;


  valor = parseInt($("#valor1").val());
  valor2 = parseInt($("#valor2").val());

  resultado = Math.pow(valor,valor2);

  $("#resultado").val(resultado);
})

$(document).on("click","#restoDivisao",function(){

  var resultado;
  
  var valor;
  var valor2;


  valor = parseInt($("#valor1").val());
  valor2 = parseInt($("#valor2").val());

  resultado = valor % valor2;

  $("#resultado").val(resultado);
})

