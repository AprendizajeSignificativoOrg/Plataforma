
/*En este archivo se encontraran una (1) función: 
				1). Función para llenar una matriz con los valores predeterminados de los factores secundarios. (*Linea 6*) 
*/

function creacionTablaFactoresSecundarios(matrizFactoresSecundarios){	

	/* Función para llenar una matriz con los valores predeterminados de los factores secundarios. 
		
		Ejemplo (Rasgo de personalidad "A" para el género Masculino):

		Género ...................... matrizFactoresSecundarios[1][0] = 0;
		Rasgo de personalidad ....... matrizFactoresSecundarios[1][1] = "A";
		Factor Secundario 1 ......... matrizFactoresSecundarios[1][2] = 1;
		Factor Secundario 2 ......... matrizFactoresSecundarios[1][3] = 4;
		Factor Secundario 3 ......... matrizFactoresSecundarios[1][4] = 1;
		Factor Secundario 4 ......... matrizFactoresSecundarios[1][5] = 0;

		* Cada rasgo de personalidad para un género representa una fila en la columna de la tabla a imprimir (para este caso 6 líneas de código).

		* Un rasgo de personalidad completo comprende ambos géneros (para este caso 12 líneas de código).

		* Los valores de género son los siguientes: 0 .... Masculino
													1 .... Femenino

		* Al final de la tabla se encuentran los valores para la constante k, los cuales serán utilizados por otra función diferente para el cálculo de resultados.  

		* Para visualizar mejor el código se añadió una línea vacía al terminar la inclusión de los valores para cada rasgo de personalidad (ambos géneros).
	*/

	/* Cabecera de la matriz */
	matrizFactoresSecundarios[0][0] = "Genero";
	matrizFactoresSecundarios[0][1] = "Rasgo de peronalidad";
	matrizFactoresSecundarios[0][2] = "Factor Secundario 1";
	matrizFactoresSecundarios[0][3] = "Factor Secundario 2";
	matrizFactoresSecundarios[0][4] = "Factor Secundario 3";
	matrizFactoresSecundarios[0][5] = "Factor Secundario 4";

	/* Cuerpo dela matriz */
	matrizFactoresSecundarios[1][0] = 0;
	matrizFactoresSecundarios[1][1] = "A";
	matrizFactoresSecundarios[1][2] = 1;
	matrizFactoresSecundarios[1][3] = 4;
	matrizFactoresSecundarios[1][4] = 1;
	matrizFactoresSecundarios[1][5] = 0;
	matrizFactoresSecundarios[2][0] = 1;
	matrizFactoresSecundarios[2][1] = "A";
	matrizFactoresSecundarios[2][2] = 0;
	matrizFactoresSecundarios[2][3] = 5;
	matrizFactoresSecundarios[2][4] = 1;
	matrizFactoresSecundarios[2][5] = -2;

	matrizFactoresSecundarios[3][0] = 0;
	matrizFactoresSecundarios[3][1] = "B";
	matrizFactoresSecundarios[3][2] = 0;
	matrizFactoresSecundarios[3][3] = -1;
	matrizFactoresSecundarios[3][4] = 3;
	matrizFactoresSecundarios[3][5] = 5;
	matrizFactoresSecundarios[4][0] = 1;
	matrizFactoresSecundarios[4][1] = "B";
	matrizFactoresSecundarios[4][2] = 0;
	matrizFactoresSecundarios[4][3] = 0;
	matrizFactoresSecundarios[4][4] = 2;
	matrizFactoresSecundarios[4][5] = 6;
	
	matrizFactoresSecundarios[5][0] = 0;
	matrizFactoresSecundarios[5][1] = "C";
	matrizFactoresSecundarios[5][2] = -3;
	matrizFactoresSecundarios[5][3] = -1;
	matrizFactoresSecundarios[5][4] = -1;
	matrizFactoresSecundarios[5][5] = 0;
	matrizFactoresSecundarios[6][0] = 1;
	matrizFactoresSecundarios[6][1] = "C";
	matrizFactoresSecundarios[6][2] = -3;
	matrizFactoresSecundarios[6][3] = -1;
	matrizFactoresSecundarios[6][4] = -1;
	matrizFactoresSecundarios[6][5] = 0;

	matrizFactoresSecundarios[7][0] = 0;
	matrizFactoresSecundarios[7][1] = "E";
	matrizFactoresSecundarios[7][2] = 0;
	matrizFactoresSecundarios[7][3] = 1;
	matrizFactoresSecundarios[7][4] = -2;
	matrizFactoresSecundarios[7][5] = 3;
	matrizFactoresSecundarios[8][0] = 1;
	matrizFactoresSecundarios[8][1] = "E";
	matrizFactoresSecundarios[8][2] = 0;
	matrizFactoresSecundarios[8][3] = 3;
	matrizFactoresSecundarios[8][4] = -2;
	matrizFactoresSecundarios[8][5] = 2;

	matrizFactoresSecundarios[9][0] = 0;
	matrizFactoresSecundarios[9][1] = "F";
	matrizFactoresSecundarios[9][2] = 0;
	matrizFactoresSecundarios[9][3] = 3;
	matrizFactoresSecundarios[9][4] = -3;
	matrizFactoresSecundarios[9][5] = 0;
	matrizFactoresSecundarios[10][0] = 1;
	matrizFactoresSecundarios[10][1] = "F";
	matrizFactoresSecundarios[10][2] = 0;
	matrizFactoresSecundarios[10][3] = 3;
	matrizFactoresSecundarios[10][4] = -2;
	matrizFactoresSecundarios[10][5] = 0;

	matrizFactoresSecundarios[11][0] = 0;
	matrizFactoresSecundarios[11][1] = "G";
	matrizFactoresSecundarios[11][2] = 0;
	matrizFactoresSecundarios[11][3] = 2;
	matrizFactoresSecundarios[11][4] = 4;
	matrizFactoresSecundarios[11][5] = 0;
	matrizFactoresSecundarios[12][0] = 1;
	matrizFactoresSecundarios[12][1] = "G";
	matrizFactoresSecundarios[12][2] = 1;
	matrizFactoresSecundarios[12][3] = 1;
	matrizFactoresSecundarios[12][4] = 4;
	matrizFactoresSecundarios[12][5] = 1;

	matrizFactoresSecundarios[13][0] = 0;
	matrizFactoresSecundarios[13][1] = "H";
	matrizFactoresSecundarios[13][2] = -2;
	matrizFactoresSecundarios[13][3] = 3;
	matrizFactoresSecundarios[13][4] = -1;
	matrizFactoresSecundarios[13][5] = 0;
	matrizFactoresSecundarios[14][0] = 1;
	matrizFactoresSecundarios[14][1] = "H";
	matrizFactoresSecundarios[14][2] = -2;
	matrizFactoresSecundarios[14][3] = 3;
	matrizFactoresSecundarios[14][4] = -1;
	matrizFactoresSecundarios[14][5] = 0;

	matrizFactoresSecundarios[15][0] = 0;
	matrizFactoresSecundarios[15][1] = "I";
	matrizFactoresSecundarios[15][2] = 1;
	matrizFactoresSecundarios[15][3] = 1;
	matrizFactoresSecundarios[15][4] = 1;
	matrizFactoresSecundarios[15][5] = 0;
	matrizFactoresSecundarios[16][0] = 1;
	matrizFactoresSecundarios[16][1] = "I";
	matrizFactoresSecundarios[16][2] = 0;
	matrizFactoresSecundarios[16][3] = -1;
	matrizFactoresSecundarios[16][4] = 0;
	matrizFactoresSecundarios[16][5] = 1;

	matrizFactoresSecundarios[17][0] = 0;
	matrizFactoresSecundarios[17][1] = "L";
	matrizFactoresSecundarios[17][2] = 2;
	matrizFactoresSecundarios[17][3] = 1;
	matrizFactoresSecundarios[17][4] = 0;
	matrizFactoresSecundarios[17][5] = 3;
	matrizFactoresSecundarios[18][0] = 1;
	matrizFactoresSecundarios[18][1] = "L";
	matrizFactoresSecundarios[18][2] = 2;
	matrizFactoresSecundarios[18][3] = 5;
	matrizFactoresSecundarios[18][4] = 1;
	matrizFactoresSecundarios[18][5] = 1;

	matrizFactoresSecundarios[19][0] = 0;
	matrizFactoresSecundarios[19][1] = "M";
	matrizFactoresSecundarios[19][2] = -1;
	matrizFactoresSecundarios[19][3] = -1;
	matrizFactoresSecundarios[19][4] = -1;
	matrizFactoresSecundarios[19][5] = 1;
	matrizFactoresSecundarios[20][0] = 1;
	matrizFactoresSecundarios[20][1] = "M";
	matrizFactoresSecundarios[20][2] = -1;
	matrizFactoresSecundarios[20][3] = -1;
	matrizFactoresSecundarios[20][4] = -1;
	matrizFactoresSecundarios[20][5] = 3;

	matrizFactoresSecundarios[21][0] = 0;
	matrizFactoresSecundarios[21][1] = "N";
	matrizFactoresSecundarios[21][2] = 0;
	matrizFactoresSecundarios[21][3] = 0;
	matrizFactoresSecundarios[21][4] = 4;
	matrizFactoresSecundarios[21][5] = 1;
	matrizFactoresSecundarios[22][0] = 1;
	matrizFactoresSecundarios[22][1] = "N";
	matrizFactoresSecundarios[22][2] = 0;
	matrizFactoresSecundarios[22][3] = 0;
	matrizFactoresSecundarios[22][4] = 3;
	matrizFactoresSecundarios[22][5] = -1;

	matrizFactoresSecundarios[23][0] = 0;
	matrizFactoresSecundarios[23][1] = "O";
	matrizFactoresSecundarios[23][2] = 3;
	matrizFactoresSecundarios[23][3] = 0;
	matrizFactoresSecundarios[23][4] = 0;
	matrizFactoresSecundarios[23][5] = -1;
	matrizFactoresSecundarios[24][0] = 1;
	matrizFactoresSecundarios[24][1] = "O";
	matrizFactoresSecundarios[24][2] = 3;
	matrizFactoresSecundarios[24][3] = 0;
	matrizFactoresSecundarios[24][4] = 0;
	matrizFactoresSecundarios[24][5] = 0;

	matrizFactoresSecundarios[25][0] = 0;
	matrizFactoresSecundarios[25][1] = "Q1";
	matrizFactoresSecundarios[25][2] = 0;
	matrizFactoresSecundarios[25][3] = 0;
	matrizFactoresSecundarios[25][4] = 0;
	matrizFactoresSecundarios[25][5] = 4;
	matrizFactoresSecundarios[26][0] = 1;
	matrizFactoresSecundarios[26][1] = "Q1";
	matrizFactoresSecundarios[26][2] = 0;
	matrizFactoresSecundarios[26][3] = 0;
	matrizFactoresSecundarios[26][4] = -1;
	matrizFactoresSecundarios[26][5] = 4;

	matrizFactoresSecundarios[27][0] = 0;
	matrizFactoresSecundarios[27][1] = "Q2";
	matrizFactoresSecundarios[27][2] = 0;
	matrizFactoresSecundarios[27][3] = -4;
	matrizFactoresSecundarios[27][4] = 0;
	matrizFactoresSecundarios[27][5] = 1;
	matrizFactoresSecundarios[28][0] = 1;
	matrizFactoresSecundarios[28][1] = "Q2";
	matrizFactoresSecundarios[28][2] = 0;
	matrizFactoresSecundarios[28][3] = 1;
	matrizFactoresSecundarios[28][4] = 0;
	matrizFactoresSecundarios[28][5] = -1;

	matrizFactoresSecundarios[29][0] = 0;
	matrizFactoresSecundarios[29][1] = "Q3";
	matrizFactoresSecundarios[29][2] = -1;
	matrizFactoresSecundarios[29][3] = 1;
	matrizFactoresSecundarios[29][4] = 3;
	matrizFactoresSecundarios[29][5] = 0;
	matrizFactoresSecundarios[30][0] = 1;
	matrizFactoresSecundarios[30][1] = "Q3";
	matrizFactoresSecundarios[30][2] = -1;
	matrizFactoresSecundarios[30][3] = 1;
	matrizFactoresSecundarios[30][4] = 3;
	matrizFactoresSecundarios[30][5] = 1;

	matrizFactoresSecundarios[31][0] = 0;
	matrizFactoresSecundarios[31][1] = "Q4";
	matrizFactoresSecundarios[31][2] = 3;
	matrizFactoresSecundarios[31][3] = 1;
	matrizFactoresSecundarios[31][4] = -1;
	matrizFactoresSecundarios[31][5] = 0;
	matrizFactoresSecundarios[32][0] = 1;
	matrizFactoresSecundarios[32][1] = "Q4";
	matrizFactoresSecundarios[32][2] = 3;
	matrizFactoresSecundarios[32][3] = 1;
	matrizFactoresSecundarios[32][4] = -1;
	matrizFactoresSecundarios[32][5] = 0;
	
	matrizFactoresSecundarios[33][0] = 0;
	matrizFactoresSecundarios[33][1] = "k";
	matrizFactoresSecundarios[33][2] = 46;
	matrizFactoresSecundarios[33][3] = 2;
	matrizFactoresSecundarios[33][4] = 23;
	matrizFactoresSecundarios[33][5] = -46;
	matrizFactoresSecundarios[34][0] = 1;
	matrizFactoresSecundarios[34][1] = "k";
	matrizFactoresSecundarios[34][2] = 51;
	matrizFactoresSecundarios[34][3] = -47;
	matrizFactoresSecundarios[34][4] = 22;
	matrizFactoresSecundarios[34][5] = -31;
}