function despedida(){
		window.location="http://localhost/BADYGS/problemasNumericos/BienvenidaProblemas.html";//función para abrir el cuestionario siguiente
	//window.close(this);
}
	//Algoritmo de captura de respuestas 
	var correctas=0;//contador respuestas correctas

	function compararRespuestas(){//funcción principal
		despedida();//llamada de función siguente cuestionario
		//comparación de respuestas estudiante y respuesta correcta con contador
		var arregloRespuestas=new Array;//variable de creacion arreglo de captura de respuestas
		respuestaPrueba(arregloRespuestas);//arreglo respuestas captura rb

		for (var i = 1; i < 2; i++) {
			
			if (arregloRespuestas[1]=="s1") {//comparación de respuestas estudiante/correcta
				correctas++;//aumento contador
			} else {
				correctas;
			}
			if (arregloRespuestas[2]=="z2") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[3]=="b3") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[4]=="i4") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[5]=="k5") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[6]=="s6") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[7]=="x7") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[8]=="e8") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[9]=="h9") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[10]=="o10") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[11]=="s11") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[12]=="x12") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[13]=="e13") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[14]=="i14") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[15]=="k15") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[16]=="p16") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[17]=="w17") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[18]=="a18") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[19]=="g19") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[20]=="k20") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[21]=="s21") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[22]=="y22") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[23]=="a23") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[24]=="h24") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[25]=="l25") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[26]=="q26") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[27]=="z27") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[28]=="e28") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[29]=="h29") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[30]=="k30") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[31]=="r31") {
				correctas++;
			} else {
				correctas;
			}
			if (arregloRespuestas[32]=="w32") {
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
		matrizBaremacionCompletar(matrizBaremacion);//matriz baremación 


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
			//document.write(" Puntaje Convertido "+baremacion+"% Escala "+escala+"<br><br>");
		}
		//Asignación del valor del arreglo de captura a la matriz respuestas
		var matrizRespuestas=new Array();//variable creación matriz respuesta
		for (var i = 0; i < 33; i++) {
			matrizRespuestas[i]=new Array(3);//creación matriz 33x3
		}
		matrizRespuestasCompletar(matrizRespuestas);//matriz respuestas

		matrizRespuestas[1][2]=arregloRespuestas[1];//asignación del valor a la matriz
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
	
	document.cookie="CorrCO ="+correctas;
	document.cookie="BareCO ="+baremacion;
	document.cookie="EsclCO ="+escala;

	}