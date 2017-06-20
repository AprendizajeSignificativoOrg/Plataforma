/*En este archivo se encontraran dos (2) funciones: 
      1). recogeRespuestasContenedores. (*Línea 8*) ***FUNCIÓN PRINCIPAL*** 
      2). cambiaContenedorxValor (*Línea 18*) 
      3). Imprime Respuestas (*Línea 50*)
*/

//FUNCIÓN PRINCIPAL: Recibe como parámetro el id de la pregunta, el id del contenedor (Respuesta) y el arreglo que almacena las respuestas.   
function recogeRespuestasContenedores (pregunta, respuesta, respuestas, contenedorLleno){ 

    var cadenaPregunta = new Array (); //Crea arreglo para guardar split.
    cadenaPregunta = pregunta.split('a'); //Divide en dos la cadena "cadenaPregunta" antes de 'a' y después de 'a'
    var numeroPregunta = Number(cadenaPregunta[1]);//Convierte cadena a número (Obtiene número ítem).

    var numeroRespuesta = cambiaContenedorxValor(respuesta);

    respuestas[numeroPregunta] = numeroRespuesta; //Llamado función para obtener el valor del contenedor (Respuesta).
    contenedorLleno[numeroRespuesta] = "S";
}

//Función para obtener el valor del contenedor (Respuesta)
function cambiaContenedorxValor (respuesta){
  // Switch: De acuerdo al contenedor recogido se le asigna el valor a la respuesta de la pregunta. 
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

    var resultados = new Array;

    resultados[1] = respuestas[1] + respuestas[7] + respuestas[17] + respuestas[21] + respuestas[30] + respuestas[36] + respuestas[37] + respuestas[43] + respuestas[50] + respuestas[55];  
    resultados[2] = respuestas[4] + respuestas[10] + respuestas[18] + respuestas[24] + respuestas[29] + respuestas[35] + respuestas[40] + respuestas[48] + respuestas[53] + respuestas[57];
    resultados[3] = respuestas[2] + respuestas[9] + respuestas[13] + respuestas[19] + respuestas[27] + respuestas[31] + respuestas[38] + respuestas[45] + respuestas[51] + respuestas[60];  
    resultados[4] = respuestas[5] + respuestas[12] + respuestas[15] + respuestas[22] + respuestas[28] + respuestas[32] + respuestas[41] + respuestas[47] + respuestas[54] + respuestas[58];
    resultados[5] = respuestas[3] + respuestas[11] + respuestas[14] + respuestas[20] + respuestas[25] + respuestas[34] + respuestas[39] + respuestas[46] + respuestas[52] + respuestas[56];
    resultados[6] = respuestas[6] + respuestas[8] + respuestas[16] + respuestas[23] + respuestas[26] + respuestas[33] + respuestas[42] + respuestas[44] + respuestas[49] + respuestas[59];
  
    document.write("<br/> Resultado A = " + resultados[1] + "<br/>");
    document.write("Resultado B = " + resultados[2] + "<br/>");
    document.write("Resultado C = " + resultados[3] + "<br/>");
    document.write("Resultado D = " + resultados[4] + "<br/>");
    document.write("Resultado E = " + resultados[5] + "<br/>");
    document.write("Resultado F = " + resultados[6] + "<br/>");

    seleccionPruebasEspecificas(resultados);

    resultadosMatrizBaremos(respuestas);
} 

function seleccionPruebasEspecificas(resultados){
  var puntajeMayor = 0;
  var subpruebaMayor = 0;
  for (i=1; i<7; i++){
    if (resultados[i]>=puntajeMayor){
      puntajeMayor = resultados[i];
      subpruebaMayor = i;
    } 
  }
      switch (subpruebaMayor){

      case 1:
        document.write("<br/> SUBPRUEBA A: " + puntajeMayor + "<br/>");
        break;  

      case 2:
        document.write("<br/> SUBPRUEBA B: " + puntajeMayor + "<br/>");
        break;  

      case 3:
        document.write("<br/> SUBPRUEBA C: " + puntajeMayor + "<br/>");
        break;  

      case 4:
        document.write("<br/> SUBPRUEBA D: " + puntajeMayor + "<br/>");
        break;  

      case 5:
        document.write("<br/> SUBPRUEBA E: " + puntajeMayor + "<br/>");
        break;  

      case 6:
        document.write("<br/> SUBPRUEBA F: " + puntajeMayor + "<br/>");
        break;
    }
}

function resultadosMatrizBaremos(respuestas){
  var matrizBaremos = new Array();
  creacionTablaBaremosIPUParte1(matrizBaremos);

  var resultados = new Array;
  for (i=1; i<7; i++){
    resultados[i]=0;
  }

  for (i=1; i<61; i++){

    switch (matrizBaremos[i]){

      case 'A':
        resultados[1] += respuestas[i];
        break;  

      case 'B':
        resultados[2] += respuestas[i];
        break;  

      case 'C':
        resultados[3] += respuestas[i];
        break;  

      case 'D':
        resultados[4] += respuestas[i];
        break;  

      case 'E':
        resultados[5] += respuestas[i];
        break;  

      case 'F':
        resultados[6] += respuestas[i];
        break;
    }
  }
   
  document.write("<br/> Resultado A = " + resultados[1] + "<br/>");
  document.write("Resultado B = " + resultados[2] + "<br/>");
  document.write("Resultado C = " + resultados[3] + "<br/>");
  document.write("Resultado D = " + resultados[4] + "<br/>");
  document.write("Resultado E = " + resultados[5] + "<br/>");
  document.write("Resultado F = " + resultados[6] + "<br/>");

  seleccionPruebasEspecificas(resultados);
}

function identificaContenedorVacio(respuesta, contenedorLleno){
  var numeroRespuesta = cambiaContenedorxValor(respuesta);

  if (contenedorLleno[numeroRespuesta] == "S"){
    alert ("contenedor Lleno");
    return contenedorVacio = false;
  }
  else {
    return contenedorVacio = true;
  }
}

function vaciaContenedor (nombrePregunta, contenedorLleno){
    switch (nombrePregunta){

      case 'Contenedor1':
        contenedorLleno[1] = "N";
        break;  

      case 'Contenedor2':
        contenedorLleno[2] = "N";
        break;  

      case 'Contenedor3':
        contenedorLleno[3] = "N";
        break;  

      case 'Contenedor4':
        contenedorLleno[4] = "N";
        break;  

      case 'Contenedor5':
        contenedorLleno[5] = "N";
        break;  

      case 'Contenedor6':
        contenedorLleno[6] = "N";
        break;
  }

}

function vaciaResultado (itemDesplazado, respuestas){
  var cadenaPregunta = new Array (); //Crea arreglo para guardar split.
  cadenaPregunta = itemDesplazado.split('a'); //Divide en dos la cadena "cadenaPregunta" antes de 'a' y después de 'a'
  var numeroPregunta = Number(cadenaPregunta[1]);//Convierte cadena a número (Obtiene número ítem).
  respuestas[numeroPregunta] = 0;
}

function reiniciarContenedor(contenedorLleno){
  for (i=1; i<7; i++){
    contenedorLleno[i] = "N";
  }
}