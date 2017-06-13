//ALGORITMO DE CAPTURA DE RESPUESTAS MEMORIA RELATO ORAL
	function despedida(){
		window.location="http://localhost/BADYGM/discriminarDiferencias/BienvenidaBADYGMDiscriminarDiferencias.html";//función para cambiar al cuestionario siguiente
	
}
	var  correctas=0;//contador respuestas correctas
	
function compararRespuestas(){//función principal
	
	//comparación de respuestas estudiante y respuesta correcta con contador
	var arregloRespuestas=new Array();//variable arreglo de captura
	
	respuestaPrueba(arregloRespuestas);//arreglo de captura

	for (var i = 1; i < 2; i++) {//recorrido del arreglo
		if (arregloRespuestas[1]=="m") {//comparación de respuestas estudiante/correcta
			correctas++;//contador en aumento
		} else {
			correctas;
		}
		if (arregloRespuestas[2]=="r") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[3]=="w") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[4]=="c") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[5]=="g") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[6]=="k") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[7]=="p") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[8]=="w") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[9]=="b") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[10]=="f") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[11]=="l") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[12]=="r") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[13]=="v") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[14]=="c") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[15]=="g") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[16]=="k") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[17]=="q") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[18]=="x") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[19]=="c") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[20]=="f") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[21]=="k") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[22]=="q") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[23]=="v") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[24]=="c") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[25]=="g") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[26]=="k") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[27]=="r") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[28]=="w") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[29]=="c") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[30]=="f") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[31]=="k") {
			correctas++;
		} else {
			correctas;
		}
		if (arregloRespuestas[32]=="q") {
			correctas++;
		} else {
			correctas;
		}

		//document.write("Puntaje Directo Obtenido por el estudiante "+correctas+"<br>");//imprime contador de respuestas correctas
	}
	var baremacion,escala;//variables baremación y escala

	var matrizBaremacion=new Array();//variable matriz baremación
	for (var i = 0; i < 34; i++) {
		matrizBaremacion[i]=new Array(3);//creación matriz 33x3
	}

	matrizBaremacionMemoria(matrizBaremacion);//matriz baremación

	for (var j = 1; j < 2; j++) {//recorrido matriz
		
		if (correctas==matrizBaremacion[1][0]) {//comparación de matriz y respuestas correctas
			baremacion=matrizBaremacion[1][1];//asignación del valor de la matriz del puntaje convertido
			escala=matrizBaremacion[1][2];//asignación del valor de la matriz de la Escala
		}

		if (correctas==matrizBaremacion[2][0]) {
			baremacion=matrizBaremacion[2][1];
			escala=matrizBaremacion[2][2];
		}
		if (correctas==matrizBaremacion[3][0]) {
			baremacion=matrizBaremacion[3][1];
			escala=matrizBaremacion[3][2];
		}

		if (correctas==matrizBaremacion[4][0]) {
			baremacion=matrizBaremacion[4][1];
			escala=matrizBaremacion[4][2];
		}
		if (correctas==matrizBaremacion[5][0]) {
			baremacion=matrizBaremacion[5][1];
			escala=matrizBaremacion[5][2];
		}
		if (correctas==matrizBaremacion[6][0]) {
			baremacion=matrizBaremacion[6][1];
			escala=matrizBaremacion[6][2];
		}

		if (correctas==matrizBaremacion[7][0]) {
			baremacion=matrizBaremacion[7][1];
			escala=matrizBaremacion[7][2];
		}
		if (correctas==matrizBaremacion[8][0]) {
			baremacion=matrizBaremacion[8][1];
			escala=matrizBaremacion[8][2];
		}

		if (correctas==matrizBaremacion[9][0]) {
			baremacion=matrizBaremacion[9][1];
			escala=matrizBaremacion[9][2];
		}

		if (correctas==matrizBaremacion[10][0]) {
			baremacion=matrizBaremacion[10][1];
			escala=matrizBaremacion[10][2];
		}

		if (correctas==matrizBaremacion[11][0]) {
			baremacion=matrizBaremacion[11][1];
			escala=matrizBaremacion[11][2];
		}
		if (correctas==matrizBaremacion[12][0]) {
			baremacion=matrizBaremacion[12][1];
			escala=matrizBaremacion[12][2];
		}

		if (correctas==matrizBaremacion[13][0]) {
			baremacion=matrizBaremacion[13][1];
			escala=matrizBaremacion[13][2];
		}
		if (correctas==matrizBaremacion[14][0]) {
			baremacion=matrizBaremacion[14][1];
			escala=matrizBaremacion[14][2];
		}
		if (correctas==matrizBaremacion[15][0]) {
			baremacion=matrizBaremacion[15][1];
			escala=matrizBaremacion[15][2];
		}

		if (correctas==matrizBaremacion[16][0]) {
			baremacion=matrizBaremacion[16][1];
			escala=matrizBaremacion[16][2];
		}
		if (correctas==matrizBaremacion[17][0]) {
			baremacion=matrizBaremacion[17][1];
			escala=matrizBaremacion[17][2];
		}

		if (correctas==matrizBaremacion[18][0]) {
			baremacion=matrizBaremacion[18][1];
			escala=matrizBaremacion[18][2];
		}

		if (correctas==matrizBaremacion[19][0]) {
			baremacion=matrizBaremacion[19][1];
			escala=matrizBaremacion[19][2];
		}

		if (correctas==matrizBaremacion[20][0]) {
			baremacion=matrizBaremacion[20][1];
			escala=matrizBaremacion[20][2];
		}
		if (correctas==matrizBaremacion[21][0]) {
			baremacion=matrizBaremacion[21][1];
			escala=matrizBaremacion[21][2];
		}

		if (correctas==matrizBaremacion[22][0]) {
			baremacion=matrizBaremacion[22][1];
			escala=matrizBaremacion[22][2];
		}
		if (correctas==matrizBaremacion[23][0]) {
			baremacion=matrizBaremacion[23][1];
			escala=matrizBaremacion[23][2];
		}
		if (correctas==matrizBaremacion[24][0]) {
			baremacion=matrizBaremacion[24][1];
			escala=matrizBaremacion[24][2];
		}

		if (correctas==matrizBaremacion[25][0]) {
			baremacion=matrizBaremacion[25][1];
			escala=matrizBaremacion[25][2];
		}
		if (correctas==matrizBaremacion[26][0]) {
			baremacion=matrizBaremacion[26][1];
			escala=matrizBaremacion[26][2];
		}

		if (correctas==matrizBaremacion[27][0]) {
			baremacion=matrizBaremacion[27][1];
			escala=matrizBaremacion[27][2];
		}

		if (correctas==matrizBaremacion[28][0]) {
			baremacion=matrizBaremacion[28][1];
			escala=matrizBaremacion[28][2];
		}
		if (correctas==matrizBaremacion[29][0]) {
			baremacion=matrizBaremacion[29][1];
			escala=matrizBaremacion[29][2];
		}
		if (correctas==matrizBaremacion[30][0]) {
			baremacion=matrizBaremacion[30][1];
			escala=matrizBaremacion[30][2];
		}

		if (correctas==matrizBaremacion[31][0]) {
			baremacion=matrizBaremacion[31][1];
			escala=matrizBaremacion[31][2];
		}
		if (correctas==matrizBaremacion[32][0]) {
			baremacion=matrizBaremacion[32][1];
			escala=matrizBaremacion[32][2];
		}

		if (correctas==matrizBaremacion[33][0]) {
			baremacion=matrizBaremacion[33][1];
			escala=matrizBaremacion[33][2];
		}
		//document.write(" Puntaje convertido "+baremacion+"% Escala "+escala+"<br><br>");//imprime puntaje convertido y escala
	}

	var matrizRespuestas=new Array();//variable matriz respuestas
	for (var i = 0; i < 33; i++) {//
		matrizRespuestas[i]=new Array(3);//creacion martriz 32x3
	}
	matrizRespuestasMemoria(matrizRespuestas);//matriz respuestas

	matrizRespuestas[1][2]=arregloRespuestas[1];//asignación de respuestas estudiante a la matriz por indice
	matrizRespuestas[2][2]=arregloRespuestas[2];
	matrizRespuestas[3][2]=arregloRespuestas[3];
	matrizRespuestas[4][2]=arregloRespuestas[4];
	matrizRespuestas[5][2]=arregloRespuestas[5];
	matrizRespuestas[6][2]=arregloRespuestas[6];
	matrizRespuestas[7][2]=arregloRespuestas[7];
	matrizRespuestas[8][2]=arregloRespuestas[8];
	matrizRespuestas[9][2]=arregloRespuestas[9];
	matrizRespuestas[10][2]=arregloRespuestas[10];
	matrizRespuestas[11][2]=arregloRespuestas[11];
	matrizRespuestas[12][2]=arregloRespuestas[12];
	matrizRespuestas[13][2]=arregloRespuestas[13];
	matrizRespuestas[14][2]=arregloRespuestas[14];
	matrizRespuestas[15][2]=arregloRespuestas[15];
	matrizRespuestas[16][2]=arregloRespuestas[16];
	matrizRespuestas[17][2]=arregloRespuestas[17];
	matrizRespuestas[18][2]=arregloRespuestas[18];
	matrizRespuestas[19][2]=arregloRespuestas[19];
	matrizRespuestas[20][2]=arregloRespuestas[20];
	matrizRespuestas[21][2]=arregloRespuestas[21];
	matrizRespuestas[22][2]=arregloRespuestas[22];
	matrizRespuestas[23][2]=arregloRespuestas[23];
	matrizRespuestas[24][2]=arregloRespuestas[24];
	matrizRespuestas[25][2]=arregloRespuestas[25];
	matrizRespuestas[26][2]=arregloRespuestas[26];
	matrizRespuestas[27][2]=arregloRespuestas[27];
	matrizRespuestas[28][2]=arregloRespuestas[28];
	matrizRespuestas[29][2]=arregloRespuestas[29];
	matrizRespuestas[30][2]=arregloRespuestas[30];
	matrizRespuestas[31][2]=arregloRespuestas[31];
	matrizRespuestas[32][2]=arregloRespuestas[32];

	
	document.cookie="CorrMO ="+correctas;
	document.cookie="BareMO ="+baremacion;
	document.cookie="EsclMO ="+escala;


}