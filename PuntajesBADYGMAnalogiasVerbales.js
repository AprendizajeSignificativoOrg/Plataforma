function despedida(){
	window.location='http://localhost/BADYGM/seriesNumericas/BienvenidaBADYGMSeriesNumericas.html';
}
	//Algoritmo de captura de respuestas
	var correctas=0;//contador respuestas correctas


	function compararRespuestas(){//función principal
	
	//comparación de respuestas estudiante y respuesta correcta con contador
		var arregloRespuestas=new Array;//variable de creacion arreglo de captura de respuestas
		respuestaPrueba(arregloRespuestas);//arreglo respuestas captura rb

		for (var i = 1; i < 2; i++) {
			
			if (arregloRespuestas[1]=="b") {//comparación de respuestas estudiante/correcta
				correctas++;//aumento contador
			} else {
				correctas;
			}
			if (arregloRespuestas[2]=="h") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[3]=="k") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[4]=="s") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[5]=="z") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[6]=="c") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[7]=="g") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[8]=="o") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[9]=="s") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[10]=="v") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[11]=="b") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[12]=="j") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[13]=="k") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[14]=="r") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[15]=="w") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[16]=="d") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[17]=="j") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[18]=="k") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[19]=="s") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[20]=="x") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[21]=="b") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[22]=="g") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[23]=="k") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[24]=="r") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[25]=="y") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[26]=="e") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[27]=="g") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[28]=="n") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[29]=="r") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[30]=="z") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[31]=="a") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[32]=="h") {
				correctas++;
			} else {
				correctas;
			}

			//document.write("Puntaje Directo Obtenido por el estudiante "+correctas+"<br>");//imprime respuestas correctas
		}

		//conversión del puntaje directo del estudiante a puntaje convertido baremación y escala
		var baremacion,escala;//variables de baremación y escala para la matriz
		var matrizBaremacion=new Array;//variable creación matriz baremacion
		for (var i = 0; i < 34; i++) {
			matrizBaremacion[i]=new Array(3);//creación matriz 33x3
		}
		matrizBaremacionAnalogias(matrizBaremacion);//matriz baremación 

		for (var j = 1; j < 2; j++) {
			
			if (correctas==matrizBaremacion[1][0]) {//comparacion de respuestas correctas para conversión de puntajes
				baremacion=matrizBaremacion[1][1];//asignación del valor del puntaje convertido baremacion
				escala=matrizBaremacion[1][2];//asignación del valor de la escala
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
				baremacion=matrizBaremacion[31][0];
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

			//document.write(" Puntaje Convertido "+baremacion+"% Escala "+escala+"<br><br>");//impresión de puntaje baremacion y escala
		}

		//asignación de los valores obtenidos en el arreglo de captura a la matriz respuestas
		var matrizRespuestas=new Array();//variable creación matriz respuestas
		for (var i = 0; i < 33; i++) {
			matrizRespuestas[i]=new Array(3);//creación matriz 33x3
		}
		matrizRespuestasAnalogias(matrizRespuestas);//matriz respuestas

		matrizRespuestas[1][2]=arregloRespuestas[1];//asignación de valor de la respuesta estudiante a la matriz respuestas
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

	
	document.cookie="CorrAV ="+correctas;
	document.cookie="BareAV ="+baremacion;
	document.cookie="EsclAV ="+escala;
 	
	}
 	