// This is a JavaScript file

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