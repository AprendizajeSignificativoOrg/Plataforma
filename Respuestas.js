
function recogeRespuestasContenedores (pregunta, respuesta, respuestas){ 

    var cadenaPregunta = new Array ();
    cadenaPregunta = pregunta.split('a');
    var numeroPregunta = Number(cadenaPregunta[1]);

    respuestas[numeroPregunta] = cambiaContenedorxValor(respuesta);
}

function cambiaContenedorxValor (respuesta){
    switch (respuesta){

      case 'Contenedor1':
        respuesta = 1;
        break;  

      case 'Contenedor2':
        respuesta = 2;
        break;  

      case 'Contenedor3':
        respuesta = 3;
        break;  

      case 'Contenedor4':
        respuesta = 4;
        break;  

      case 'Contenedor5':
        respuesta = 5;
        break;  

      case 'Contenedor6':
        respuesta = 6;
        break;
  }
  return respuesta;
}


function imprimeRespuestas(respuestas){
  for (i=1; i<7; i++){
      document.write(i + " . ");
      document.write(respuestas[i] + "<br/>");
    }
} 
     