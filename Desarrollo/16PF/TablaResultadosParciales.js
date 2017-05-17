
/*En este archivo se encontraran una (1) función: 
			1). Función que captura los valores correctos (de acuerdo a la opción seleccionada por el estudiante) de tabla matrizPerfilGeneralEscalasValidez y los guarda en una matriz de Respuestas mostrando tambien resultados parciales. (*Linea 6*) 
*/

function creacionTablaResultadosParciales(matrizResultadosPerfilGeneralyValidez){

	/* Función que captura los valores correctos (de acuerdo a la opción seleccionada por el estudiante) de tabla matrizPerfilGeneralEscalasValidez y los guarda en una matriz de Respuestas mostrando tambien resultados parciales. 

		Ejemplo matrizResultadosPerfilGeneralyValidez (Opción seleccionada "A" en el Ítem 4):

		Ítem ........................ matrizFactoresSecundarios[4][0] = 4;
		Opción Seleccionada ......... matrizFactoresSecundarios[4][1] = "A";
		Rasgo de personalidad ....... matrizFactoresSecundarios[4][2] = "C";
		Escala de validez ........... matrizFactoresSecundarios[4][3] = "D";
 	*/


	/* Declara e inicializa en 0 dos variables contador para lograr un total en las escalas de validez negación y distorsión */
		var negacion = 0;
		var distorsion = 0;

	/* For que recorre cada una de los Ítems con el fin de capturar las respuestas y los resultados del perfil general - escalas de validez*/
	for (var m=1; m<188; m++){
		/* Asigna el número de cada Ítem en la posición [x][0] de la matrizResultadosPerfilGeneralyValidez */
		matrizResultadosPerfilGeneralyValidez[m][0] = l;
		/*Asigna la respuesta que tuvo el estudiante en cada Ítem en la posición [x][1] de la matrizResultadosPerfilGeneralyValidez */
		matrizResultadosPerfilGeneralyValidez[m][1] = arregloRespuestas[m];

		/* Si la respuesta seleccionada por el estudiante es "C" se guarda en la matrizResultadosPerfilGeneralyValidez de la siguiente manera:

				Rasgo de personalidad ................ matrizResultadosPerfilGeneralyValidez[(m*3)][1] 
				Valor de la opción de respuesta ...... matrizResultadosPerfilGeneralyValidez[(m*3)][2]
				Escala de validez .................... matrizResultadosPerfilGeneralyValidez[(m*3)][3]

				* la variable m se multiplica en 3 [(m*3)] porque la matrizPerfilGeneralEscalasValidez es 3 veces más grande ya que esta tiene todas las opciones de respuesta para cada Ítem, por tanto l*3 es la última posición (opción C) para cada ítem m. 
		 */
		if (arregloRespuestas[m] == "C"){
			matrizResultadosPerfilGeneralyValidez[m][2] = matrizPerfilGeneralEscalasValidez[m*3][2];	
			matrizResultadosPerfilGeneralyValidez[m][3] = matrizPerfilGeneralEscalasValidez[m*3][3];
			matrizResultadosPerfilGeneralyValidez[m][4] = matrizPerfilGeneralEscalasValidez[m*3][4];
			/* Si la condición es cierta suma un punto a la escala negación */
			if (matrizResultadosPerfilGeneralyValidez[m][4] == "N"){
				negacion++;
			}
			/* Si la condición es cierta suma un punto a la escala distorsión */
			else if (matrizResultadosPerfilGeneralyValidez[m][4] == "D"){
				distorsion++;
			}
		}
		/* Si la respuesta seleccionada por el estudiante es "B":
			* [m*3] es la posición de la opción "C" para el Ítem m, por tanto al restarle 1 será la posición anterior del Ítem m, la cual es "B".
		*/
		else if (arregloRespuestas[m] == "B"){
			matrizResultadosPerfilGeneralyValidez[m][2] = matrizPerfilGeneralEscalasValidez[(m*3)-1][2];	
			matrizResultadosPerfilGeneralyValidez[m][3] = matrizPerfilGeneralEscalasValidez[(m*3)-1][3];
			matrizResultadosPerfilGeneralyValidez[m][4] = matrizPerfilGeneralEscalasValidez[(m*3)-1][4];
			/* Si la condición es cierta suma un punto a la escala negación */
			if (matrizResultadosPerfilGeneralyValidez[m][4] == "N"){
				negacion++;
			}
			/* Si la condición es cierta suma un punto a la escala distorsión */
			else if (matrizResultadosPerfilGeneralyValidez[m][4] == "D"){
				distorsion++;
			}
		}	
		/* Si la respuesta seleccionada por el estudiante es "A":
			* [m*3] es la posición de la opción "C" para el Ítem m, por tanto al restarle 2 será dos posiciones anteriores del Ítem m, la cual es "A".
		*/
		else if (arregloRespuestas[m] == "A"){
			matrizResultadosPerfilGeneralyValidez[m][2] = matrizPerfilGeneralEscalasValidez[(m*3)-2][2];	
			matrizResultadosPerfilGeneralyValidez[m][3] = matrizPerfilGeneralEscalasValidez[(m*3)-2][3];
			matrizResultadosPerfilGeneralyValidez[m][4] = matrizPerfilGeneralEscalasValidez[(m*3)-2][4];
			/* Si la condición es cierta suma un punto a la escala negación */
			if (matrizResultadosPerfilGeneralyValidez[m][4] == "N"){
				negacion++;
			}
			/* Si la condición es cierta suma un punto a la escala distorsión */
			else if (matrizResultadosPerfilGeneralyValidez[m][4] == "D"){
				distorsion++;
			}
		}
		/* En caso de que el Ítem no haya sido contestado se asigna ":("" al Ítem m */
		else {
			matrizResultadosPerfilGeneralyValidez[m][2] = " :( ";	
			matrizResultadosPerfilGeneralyValidez[m][3] = " :( ";
		}	
	}


	/* Imprime en pantalla matrizResultadosPerfilGeneralyValidez[i][j] la cual representa la tabla de resultados parcial */ 
	for (var i=1; i<188; i++){
		for (var j=0; j<5; j++){
			document.write(matrizResultadosPerfilGeneralyValidez[i][j] + "  ||  ");
		}
		document.write("<br/>");
	}
	
}