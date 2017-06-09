/*En este archivo se encontraran dos (2) funciones: 
      1). recogeRespuestasContenedores. (*Línea 8*) ***FUNCIÓN PRINCIPAL*** 
      2). cambiaContenedorxValor (*Línea 18*) 
      3). Imprime Respuestas (*Línea 50*)
*/

//FUNCIÓN PRINCIPAL: Recibe como parámetro el id de la pregunta, el id del contenedor (Respuesta) y el arreglo que almacena las respuestas.   
function recogeRespuestasContenedores (pregunta, respuesta, respuestas){ 

    var cadenaPregunta = new Array (); //Crea arreglo para guardar split.
    cadenaPregunta = pregunta.split('a'); //Divide en dos la cadena "cadenaPregunta" antes de 'a' y después de 'a'
    var numeroPregunta = Number(cadenaPregunta[1]);//Convierte cadena a número (Obtiene número ítem).

    respuestas[numeroPregunta] = cambiaContenedorxValor(respuesta); //Llamado función para obtener el valor del contenedor (Respuesta).
}

//Función para obtener el valor del contenedor (Respuesta)
function cambiaContenedorxValor (respuesta){
  // Switch: de acuerdo al contenedor recogido se le asigna el valor a la respuesta de la pregunta. 
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

//Función que imprime el arreglo de las respuestas.
function imprimeRespuestas(respuestas){
  for (i=1; i<61; i++){
      document.write(i + " . ");
      document.write(respuestas[i] + "<br/>");
    }
} 
     