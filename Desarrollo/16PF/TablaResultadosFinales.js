
/*En este archivo se encontraran una (1) función: 
				1). Función para llenar una matriz con los valores predeterminados del perfil general y las escalas de validez. (*Linea 6*) 
*/

function creacionTablaResultadosFinales(matrizResultados){	

	/* Función para llenar una matriz que recibe los resultados de cada rasgo de personalidad. 
		
		Ejemplo (Rasgo de personalidad "A"):

		Rasgo de personalidad .................. matrizResultados[1][0] = "A";
		Puntuación directa Rasgo Personalidad... matrizResultados[1][1] = 0;
		Decatipo resultante..................... matrizResultados[1][2] = 0;

		* Cada rasgo de personalidad representa una fila en la columna de la tabla a imprimir (para este caso 3 líneas de código).

		* Las posiciones [x][1] y [x][2] son llenadas con valores 0 ya que los resultados serán ingresados posteriormente.

		* Para visualizar mejor el código se añadió una línea vacía al terminar la inclusión de los valores para cada rasgo de personalidad.
	*/

	/* Cabecera de la matriz */
	matrizResultados[0][0] = "Rasgo de personalidad";
	matrizResultados[0][1] = "Puntuación directa - Rasgo Personalidad";
	matrizResultados[0][2] = "Decatipo Resultante";	

	/* Cuerpo de la matriz */
	matrizResultados[1][0] = "A";
	matrizResultados[1][1] = 0;
	matrizResultados[1][2] = 0;

	matrizResultados[2][0] = "B";
	matrizResultados[2][1] = 0;
	matrizResultados[2][2] = 0;

	matrizResultados[3][0] = "C";
	matrizResultados[3][1] = 0;
	matrizResultados[3][2] = 0;

	matrizResultados[4][0] = "E";
	matrizResultados[4][1] = 0;
	matrizResultados[4][2] = 0;

	matrizResultados[5][0] = "F";
	matrizResultados[5][1] = 0;
	matrizResultados[5][2] = 0;

	matrizResultados[6][0] = "G";
	matrizResultados[6][1] = 0;
	matrizResultados[6][2] = 0;

	matrizResultados[7][0] = "H";
	matrizResultados[7][1] = 0;
	matrizResultados[7][2] = 0;

	matrizResultados[8][0] = "I";
	matrizResultados[8][1] = 0;
	matrizResultados[8][2] = 0;

	matrizResultados[9][0] = "L";
	matrizResultados[9][1] = 0;
	matrizResultados[9][2] = 0;

	matrizResultados[10][0] = "M";
	matrizResultados[10][1] = 0;
	matrizResultados[10][2] = 0;

	matrizResultados[11][0] = "N";
	matrizResultados[11][1] = 0;
	matrizResultados[11][2] = 0;

	matrizResultados[12][0] = "O";
	matrizResultados[12][1] = 0;
	matrizResultados[12][2] = 0;

	matrizResultados[13][0] = "Q1";
	matrizResultados[13][1] = 0;
	matrizResultados[13][2] = 0;

	matrizResultados[14][0] = "Q2";
	matrizResultados[14][1] = 0;
	matrizResultados[14][2] = 0;

	matrizResultados[15][0] = "Q3";
	matrizResultados[15][1] = 0;
	matrizResultados[15][2] = 0;

	matrizResultados[16][0] = "Q4";
	matrizResultados[16][1] = 0;
	matrizResultados[16][2] = 0;

}