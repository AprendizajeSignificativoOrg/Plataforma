
/*En este archivo se encontraran cinco (5) funciones: 
			1). Imprime tabla opciones seleccionadas. (*Línea 10*) 
			2). Imprime tabla perfil general y escalas de validez (*Línea 21*)
			3). Imprime tabla baremos masculinos. (*Línea 37*) 
			4). Imprime tabla baremos femeninos (*Línea 53*)
			5). Imprime tabla de Factores secundarios (*Línea 69*)
*/

function mostrarOpcionSeleccionada(){
	/* Declara arreglo para recoger las respuestas */
	var arregloRespuestas = new Array();
	/* Llamada a función opcionSeleccionada() */
	opcionSeleccionada(arregloRespuestas);
	/* For para recorrer e imprimir el arreglo */
	for (var x=1; x<188; x++){
		document.write(x + ". " + arregloRespuestas[x] + "<br/>");
	}
}


function mostrarPerfilGeneralyEscalasValidez(){
	/* Declara un arreglo inicial cuya matriz será pasada como parámetro a la función creacionPerfilGeneralyEscalasValidez() para recoger en esta la tabla de perfil general y escalas de validez */
	var matrizPerfilGeneralEscalasValidez = new Array();
	/* Declara una matriz utilizando el arreglo anterior:
	   Para cada fila de la tabla se declara un arreglo con el número de columnas necesarias (para este caso 561 filas y 4 columnas) */
	for (var a=1; a<562; a++){
			matrizPerfilGeneralEscalasValidez[a] = new Array(3);
		}
	/* Llamada a función creacionPerfilGeneralyEscalasValidez() */
	creacionPerfilGeneralyEscalasValidez(matrizPerfilGeneralEscalasValidez);
	/* Doble for para imprimir matrizPerfilGeneralEscalasValidez */
	for (var i=1; i<562; i++){
		for (var j=0; j<4; j++){
		document.write(matrizPerfilGeneralEscalasValidez[i][j] + "  ||  ");
		}
		document.write("<br/>");
	}
}


function mostrarTablaBaremosMasculino(){
	/* Declara un arreglo inicial cuya matriz será pasada como parámetro a la función creacionTablaBaremosMasculino */	
	var matrizBaremos = new Array();
	/* Declara una matriz utilizando el arreglo anterior:
	   Para cada fila de la tabla se declara un arreglo con el número de columnas necesarias (para este caso 371 filas y 3 columnas) */
	for (var a=0; a<372; a++){
			matrizBaremos[a] = new Array(3);
		}
	/* Llamada a función creacionTablaBaremosMasculino() */
	creacionTablaBaremosMasculino(matrizBaremos);
	/* Doble for para imprimir matrizBaremos */	
	for (var i=0; i<372; i++){
		for (var j=0; j<3; j++){
		document.write(matrizBaremos[i][j] + "  ||  ");
		}
		document.write("<br/>");
	}
}


function mostrarTablaBaremosFemenino(){
	/* Declara un arreglo inicial cuya matriz será pasada como parámetro a la función creacionTablaBaremosFemenino */	
	var matrizBaremos = new Array();
		/* Declara una matriz utilizando el arreglo anterior:
	   Para cada fila de la tabla se declara un arreglo con el número de columnas necesarias (para este caso 371 filas y 3 columnas) */
	for (var a=0; a<372; a++){
			matrizBaremos[a] = new Array(3);
		}
	/* Llamada a función creacionTablaBaremosFemenino() */
	creacionTablaBaremosFemenino(matrizBaremos);
	/* Doble for para imprimir matrizBaremos */
	for (var i=0; i<372; i++){
		for (var j=0; j<3; j++){
		document.write(matrizBaremos[i][j] + "  ||  ");
		}
		document.write("<br/>");
	}
}


function mostrarTablaFactoresSecundarios(){
	/* Declara un arreglo inicial cuya matriz será pasada como parámetro a la función creacionTablaFactoresSecundarios para generar la tabla de factores secundarios */	
	var matrizFactoresSecundarios = new Array();
	/* Declara una matriz utilizando el arreglo anterior:
	   Para cada fila de la tabla se declara un arreglo con el número de columnas necesarias (para este caso 34 filas y 3 columnas)
	 */
	for (var a=0; a<35; a++){
			matrizFactoresSecundarios[a] = new Array(6);
		}
	/* Llamada a función creacionTablaFactoresSecundarios() */
	creacionTablaFactoresSecundarios(matrizFactoresSecundarios);
	/* Doble for para imprimir matrizFactoresSecundarios */
	for (var i=0; i<35; i++){
		for (var j=0; j<6; j++){
		document.write(matrizFactoresSecundarios[i][j] + "  ||  ");
		}
		document.write("<br/>");
	}
}