
function recogeRespuestasContenedores (pregunta, respuesta){

var respuestas new Array(); 

switch (pregunta){
  case Pregunta1:
  respuestas[1] = respuesta;
  break;

  case Pregunta2:
  respuestas[2] = respuesta;
  break;

  case Pregunta3:
  respuestas[3] = respuesta;
  break;

  case Pregunta4:
  respuestas[4] = respuesta;
  break;

  case Pregunta5:
  respuestas[5] = respuesta;
  break;

  case Pregunta6:
  respuestas[6] = respuesta;
  break;
}
return respuestas;
}