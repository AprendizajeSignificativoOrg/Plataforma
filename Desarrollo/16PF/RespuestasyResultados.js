
/*En este archivo se encontraran dos (2) funciones: 
				1). Función para recoger las respuestas de cada Ítem. (*Línea 7*) 
				2). FUNCIÓN PRINCIPAL: Encargada de calcular y mostrar los resultados obtenidos en la prueba (**Línea 37**)
*/

function opcionSeleccionada(arregloRespuestas){

/* Función para recoger las respuestas de cada Ítem*/

/*Esta función utiliza un doble "For" el primero recorre las 187 preguntas del cuestionario y el segundo las 3 opciones de respuesta de cada pregunta para saber cuál de ellas ha sido seleccionada*/

	for (var j=0; j<188; j++){
		/* Variable para determinar si la pregunta fue contestada */
		var resuelta = false;
		/* Variable que almacena en un arreglo los valores de las opciones de respuesta de las preguntas.
		   Las preguntas son llamadas a partir de su nombre utilizando el DOM (para esto se aprovechan los nombres secuenciales de las preguntas). */
		var opciones = document.getElementsByName("Pregunta"+j);
		/* Utilizando el .length del arreglo guardado anteriormente se recorren las opciones de respuesta de las preguntas */
		for(var i=0; i<opciones.length; i++) {
			/* Si la opción de respuesta es la que ha seleccionado el estudiante, el valor se guarda en: arregloRespuestas y la variable: resuelta se le asigna .true. para indicar que la respuesta fue resuelta */
  			if (opciones[i].checked == true){
  				alert("En la pregunta " + j +" Ha seleccionado la opci\u00F3n: " + opciones[i].value);
  				resuelta = true;
  				arregloRespuestas[j] = opciones[i].value;
  			}
		}
		/* Si luego de evaluar las respuestas la variable resulta es igual .false. (significa que ninguna opción fue seleccionada) se mostrara un alert y se asignara 0 a la posición [j] de: arregloRespuestas  */
		if (resuelta == false){
		alert ("La pregunta " + j + " no ha sido resuelta");
		arregloRespuestas[j] = 0;
		}
	}
}


/***************** FUNCIÓN PRINCIPAL: Encargada de calcular y mostrar los resultados obtenidos en la prueba *****************/
function mostrarResultados16PF(){

	/* Declara un arreglo que será pasado como parámetro a la función opcionseleccionada() para recoger en este las respuestas del cuestionario */
	var arregloRespuestas = new Array();
	/* Llamado a la función opcionSeleccionada() */
	opcionSeleccionada(arregloRespuestas);
	/* Declaración y asignación de valor a la variable genero - valor tomado de la posición [0] de arregloRespuestas (ya que la primer pregunta es el género del estudiante) */
	var genero = arregloRespuestas[0];
	/* Declaración y asignación de valor a la variable nombre - valor tomado del elemento del DOM con Id:"Nombre" (Es la primer pregunta del cuestionario que responde el estudiante) */
    var nombre = document.getElementById("Nombre").value;
    /* Escribe en pantalla un saludo con el nombre del estudiante */
	document.write("Hola " + nombre + " a continuaci\u00F3n podr\u00E1s ver tus resultados: <br/> <br/>");

	/* Declara un arreglo inicial cuya matriz será pasada como parámetro a la función creacionPerfilGeneralyEscalasValidez() para recoger en esta la tabla de perfil general y escalas de validez */
	var matrizPerfilGeneralEscalasValidez = new Array();
	/* Declara una matriz utilizando el arreglo anterior:
	   Para cada fila de la tabla se declara un arreglo con el número de columnas necesarias (para este caso 561 filas y 5 columnas)
	   */
	for (var a=0; a<562; a++){
		matrizPerfilGeneralEscalasValidez[a] = new Array(5);
	}
	/* Llamado a la función creacionPerfilGeneralyEscalasValidez() */
	creacionPerfilGeneralyEscalasValidez(matrizPerfilGeneralEscalasValidez);
	
	/* Declara un arreglo inicial cuya matriz será pasada como parámetro a la función creacionTablaResultadosParciales() para recoger los valores correctos (de acuerdo a la opción selecconada por el estudiante) de tabla matrizPerfilGeneralEscalasValidez */
	var matrizResultadosPerfilGeneralyValidez = new Array();
	/* Declara una matriz utilizando el arreglo anterior:
	   Para cada fila de la tabla se declara un arreglo con el número de columnas necesarias (para este caso 187 filas y 5 columnas)
	 */
	for (var b=1; b<188; b++){
		matrizResultadosPerfilGeneralyValidez[b] = new Array(5);
	}

	/* Llamado a la función creacionTablaResultadosParciales() */
	creacionTablaResultadosParciales(matrizResultadosPerfilGeneralyValidez, arregloRespuestas, matrizPerfilGeneralEscalasValidez);

	/* Declara un arreglo inicial cuya matriz será pasada como parámetro a la función creacionTablaResultadosFinales() para recoger los resultados finales desde: matrizResultadosPerfilGeneralyValidez y matrizBaremos*/
	var matrizResultados = new Array();
	/* Declara una matriz utilizando el arreglo anterior:
	   Para cada fila de la tabla se declara un arreglo con el número de columnas necesarias (para este caso 16 filas y 3 columnas)
	 */
	for (var b=0; b<17; b++){
		matrizResultados[b] = new Array(3);
		}
	/* Llamado a la función creacionTablaResultadosFinales() */
	creacionTablaResultadosFinales(matrizResultados);	

	/* For que recorre cada una de los Ítems con el fin de sumar los valores de cada rasgo de personalidad (de acuerdo a las opciones seleccionadas por los estudiantes). */
	for (var i=1; i<188; i++){
		/*Los siguientes if verifican si la opcion seleccionada(respuesta) corresponde a alguno del los rasgos de personalidad y al cumplirse la condición suman el valor correspondiente relacionado anteriormente en: matrizResultadosPerfilGeneralyValidez) */	
		if (matrizResultadosPerfilGeneralyValidez[i][3] == "A"){
			matrizResultados[1][1] += matrizResultadosPerfilGeneralyValidez[i][2];
		}
		else if (matrizResultadosPerfilGeneralyValidez[i][3] == "B"){
			matrizResultados[2][1] += matrizResultadosPerfilGeneralyValidez[i][2];
		}
		else if (matrizResultadosPerfilGeneralyValidez[i][3] == "C"){
			matrizResultados[3][1] += matrizResultadosPerfilGeneralyValidez[i][2];
		}
		else if (matrizResultadosPerfilGeneralyValidez[i][3] == "E"){
			matrizResultados[4][1] += matrizResultadosPerfilGeneralyValidez[i][2];
		}
		else if (matrizResultadosPerfilGeneralyValidez[i][3] == "F"){
			matrizResultados[5][1] += matrizResultadosPerfilGeneralyValidez[i][2];
		}
		else if (matrizResultadosPerfilGeneralyValidez[i][3] == "G"){
			matrizResultados[6][1] += matrizResultadosPerfilGeneralyValidez[i][2];
		}
		else if (matrizResultadosPerfilGeneralyValidez[i][3] == "H"){
			matrizResultados[7][1] += matrizResultadosPerfilGeneralyValidez[i][2];
		}
		else if (matrizResultadosPerfilGeneralyValidez[i][3] == "I"){
			matrizResultados[8][1] += matrizResultadosPerfilGeneralyValidez[i][2];
		}
		else if (matrizResultadosPerfilGeneralyValidez[i][3] == "L"){
			matrizResultados[9][1] += matrizResultadosPerfilGeneralyValidez[i][2];
		}
		else if (matrizResultadosPerfilGeneralyValidez[i][3] == "M"){
			matrizResultados[10][1] += matrizResultadosPerfilGeneralyValidez[i][2];
		}
		else if (matrizResultadosPerfilGeneralyValidez[i][3] == "N"){
			matrizResultados[11][1] += matrizResultadosPerfilGeneralyValidez[i][2];
		}
		else if (matrizResultadosPerfilGeneralyValidez[i][3] == "O"){
			matrizResultados[12][1] += matrizResultadosPerfilGeneralyValidez[i][2];
		}
		else if (matrizResultadosPerfilGeneralyValidez[i][3] == "Q1"){
			matrizResultados[13][1] += matrizResultadosPerfilGeneralyValidez[i][2];
		}
		else if (matrizResultadosPerfilGeneralyValidez[i][3] == "Q2"){
			matrizResultados[14][1] += matrizResultadosPerfilGeneralyValidez[i][2];
		}
		else if (matrizResultadosPerfilGeneralyValidez[i][3] == "Q3"){
			matrizResultados[15][1] += matrizResultadosPerfilGeneralyValidez[i][2];
		}
		else if (matrizResultadosPerfilGeneralyValidez[i][3] == "Q4"){
			matrizResultados[16][1] += matrizResultadosPerfilGeneralyValidez[i][2];
		}			
	}
		document.write ("<br/>");


	/* For que recorre una columna de la matrizResultados e imprime la puntuación obtenida para cada rasgo de personalidad*/
	for (i=1; i<17; i++){
		document.write ("Puntuacion directa " +  matrizResultados[i][0] + " = " + matrizResultados[i][1] + "<br/>");
	}

	/* Declara un arreglo inicial cuya matriz será pasada como parámetro a la función creacionTablaBaremosMasculino o creacionTablaBaremosFemenino de acuerdo al valor dela variable genero[0] */	
	var matrizBaremos = new Array();
	/* Declara una matriz utilizando el arreglo anterior:
	   Para cada fila de la tabla se declara un arreglo con el número de columnas necesarias (para este caso 371 filas y 3 columnas)
	 */
	for (var a=0; a<372; a++){
		matrizBaremos[a] = new Array(3);
	}

	/* Condición para determinar que función se utiliza de acuerdo a la variable genero: Masculino ("M") o Femenino ("F") */
	if (genero[0] == "M"){
		creacionTablaBaremosMasculino(matrizBaremos);
	}
	else if (genero[0] == "F"){
		creacionTablaBaremosFemenino(matrizBaremos);
	}
	else{
		document.write("Genero no definido");
	}

	/* For que recorre la cantidad de filas de la matriz baremos seleccionada */

	for (var i=1; i<372; i++){

		/* Los siguientes if verifican:
		 1). El rasgo de personalidad: matrizBaremos[i][0] corresponda a alguno de los rasgos establecidos.
		 2). La puntuación directa obtenida (matrizResultados[x][1]) con la puntuación directa de la tabla baremos (matrizBaremos[i][1])

		   Si las condiciones se cumplen, asignan en matrizResultados[x][2] el decatipo correspondiente (matrizBaremos[i][2]) 
		 */

		if (matrizBaremos[i][0] == "A" && matrizBaremos[i][1] == matrizResultados[1][1]){
			matrizResultados[1][2] = matrizBaremos[i][2];
		}
		else if (matrizBaremos[i][0] == "B" && matrizBaremos[i][1] == matrizResultados[2][1]){
			matrizResultados[2][2] = matrizBaremos[i][2];
		}
		else if (matrizBaremos[i][0] == "C" && matrizBaremos[i][1] == matrizResultados[3][1]){
			matrizResultados[3][2] = matrizBaremos[i][2];
		}
		else if (matrizBaremos[i][0] == "E" && matrizBaremos[i][1] == matrizResultados[4][1]){
			matrizResultados[4][2] = matrizBaremos[i][2];
		}
		else if (matrizBaremos[i][0] == "F" && matrizBaremos[i][1] == matrizResultados[5][1]){
			matrizResultados[5][2] = matrizBaremos[i][2];
		}
		else if (matrizBaremos[i][0] == "G" && matrizBaremos[i][1] == matrizResultados[6][1]){
			matrizResultados[6][2] = matrizBaremos[i][2];
		}
		else if (matrizBaremos[i][0] == "H" && matrizBaremos[i][1] == matrizResultados[7][1]){
			matrizResultados[7][2] = matrizBaremos[i][2];
		}
		else if (matrizBaremos[i][0] == "I" && matrizBaremos[i][1] == matrizResultados[8][1]){
			matrizResultados[8][2] = matrizBaremos[i][2];
		}
		else if (matrizBaremos[i][0] == "L" && matrizBaremos[i][1] == matrizResultados[9][1]){
			matrizResultados[9][2] = matrizBaremos[i][2];
		}
		else if (matrizBaremos[i][0] == "M" && matrizBaremos[i][1] == matrizResultados[10][1]){
			matrizResultados[10][2] = matrizBaremos[i][2];
		}
		else if (matrizBaremos[i][0] == "N" && matrizBaremos[i][1] == matrizResultados[11][1]){
			matrizResultados[11][2] = matrizBaremos[i][2];
		}
		else if (matrizBaremos[i][0] == "O" && matrizBaremos[i][1] == matrizResultados[12][1]){
			matrizResultados[12][2] = matrizBaremos[i][2];
		}
		else if (matrizBaremos[i][0] == "Q1" && matrizBaremos[i][1] == matrizResultados[13][1]){
			matrizResultados[13][2] = matrizBaremos[i][2];
		}
		else if (matrizBaremos[i][0] == "Q2" && matrizBaremos[i][1] == matrizResultados[14][1]){
			matrizResultados[14][2] = matrizBaremos[i][2];
		}
		else if (matrizBaremos[i][0] == "Q3" && matrizBaremos[i][1] == matrizResultados[15][1]){
			matrizResultados[15][2] = matrizBaremos[i][2];
		}
		else if (matrizBaremos[i][0] == "Q4" && matrizBaremos[i][1] == matrizResultados[16][1]){
			matrizResultados[16][2] = matrizBaremos[i][2];
		}		
	}

	document.write("<br/>");

	/* Imprime en pantalla la primer columna de matrizResultados (Decatipo) */
		for (i=1; i<17; i++){
			document.write ("Decatipo " +  matrizResultados[i][0] + " = " + matrizResultados[i][2] + "<br/>");
		}

	/* Declaración las variables necesarias para cada factor secundario */
	var factorSecundario1 = 0;
	var factorSecundario2 = 0;
	var factorSecundario3 = 0;
	var factorSecundario4 = 0;

	/* Declara un arreglo inicial cuya matriz será pasada como parámetro a la función creacionTablaFactoresSecundarios para generar la tabla de factores secundarios */	
	var matrizFactoresSecundarios = new Array();
	/* Declara una matriz utilizando el arreglo anterior:
	   Para cada fila de la tabla se declara un arreglo con el número de columnas necesarias (para este caso 34 filas y 6 columnas)
	 */
	for (var a=0; a<35; a++){
		matrizFactoresSecundarios[a] = new Array(6);
	}
	/* Llamado a la función creacionTablaFactoresSecundarios() */
	creacionTablaFactoresSecundarios(matrizFactoresSecundarios);

	/* Condición de acuerdo al valor de la variable genero */
	if (genero[0] == "F"){
		/* Este for comienza en dos y recorre la matrizFactoresSecundarios de a dos ya que en las posiciones pares se encuentran los valores para el género "F" */
		for (i=2; i<33; i+=2){
			/* [i/2] = La variable i se divide en dos ya que la matrizFactoresSecundarios es dos veces más grande que la matrizResultados */
			
			/* Sumatoria de: Decatipo de cada rasgo de personalidad (matrizResultados[i/2][0]) multiplicada por el valor correspondiente de los cuatro factores secundarios (matrizFactoresSecundarios[i][2]) */
			factorSecundario1 += matrizResultados[i/2][2] * matrizFactoresSecundarios[i][2];
			factorSecundario2 += matrizResultados[i/2][2] * matrizFactoresSecundarios[i][3];
			factorSecundario3 += matrizResultados[i/2][2] * matrizFactoresSecundarios[i][4];
			factorSecundario4 += matrizResultados[i/2][2] * matrizFactoresSecundarios[i][5];
		}
		/* A cada factor secundario se le suma la variable k correspondiente a su género (matrizFactoresSecundarios[34][2])*/
		factorSecundario1 += matrizFactoresSecundarios[34][2];
		factorSecundario2 += matrizFactoresSecundarios[34][3];
		factorSecundario3 += matrizFactoresSecundarios[34][4];
		factorSecundario4 += matrizFactoresSecundarios[34][5];
	}

	else if (genero[0] == "M"){
		/* Este for comienza en uno y recorre la matrizFactoresSecundarios de a dos ya que en las posiciones impares se encuentran los valores para el género "M" */
		for (i=1; i<33; i+=2){
			var w = (i/2) + 0.5;
			/* w = La variable i se divide en dos ya que la matrizFactoresSecundarios es dos veces más grande que la matrizResultados y debido a que el valor resultante no es número entero se le suma 0.5 */
			
			/* Sumatoria de: Decatipo de cada rasgo de personalidad (matrizResultados[i/2][1]) multiplicada por el valor correspondiente de los cuatro factores secundarios (matrizFactoresSecundarios[i][2]) */
			factorSecundario1 += matrizResultados[w][2] * matrizFactoresSecundarios[i][2];
			factorSecundario2 += matrizResultados[w][2] * matrizFactoresSecundarios[i][3];
			factorSecundario3 += matrizResultados[w][2] * matrizFactoresSecundarios[i][4];
			factorSecundario4 += matrizResultados[w][2] * matrizFactoresSecundarios[i][5];
		}
		/* A cada factor secundario se le suma la variable k correspondiente a su género (matrizFactoresSecundarios[34][2])*/
		factorSecundario1 += matrizFactoresSecundarios[33][2];
		factorSecundario2 += matrizFactoresSecundarios[33][3];
		factorSecundario3 += matrizFactoresSecundarios[33][4];
		factorSecundario4 += matrizFactoresSecundarios[33][5];
	}

	/* El resultado final de cada factor secundario es dividido en 10 */
	factorSecundario1 /= 10;
	factorSecundario2 /= 10;
	factorSecundario3 /= 10;
	factorSecundario4 /= 10;		

	/* Imprime los resultados finales de cada factor secundario */
	document.write("<br/> Factor Secundario 1 = " + factorSecundario1 + "<br/>");
	document.write("Factor Secundario 2 = " + factorSecundario2 + "<br/>");
	document.write("Factor Secundario 3 = " + factorSecundario3 + "<br/>");
	document.write("Factor Secundario 4 = " + factorSecundario4 + "<br/>");
}	