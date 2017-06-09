/*En este archivo se encontraran tres (3) funciones: 
			1). cambioPreguntasBotones. (*Línea 8*) ***FUNCIÓN PRINCIPAL*** 
			2). obtieneIdSiguientePregunta (*Línea 11*)
			3). obtieneIdAnteriorPregunta (*Línea 21*) 
*/

//FUNCIÓN PRINCIPAL: Recibe como parámetro la cantidad de preguntas del cuestionario, para su funcionamiento cada pregunta (o grupo de preguntas) debe estar dentro de un div con class = Preguntas e id = PreguntasX donde "X" es el número de Ítem.   
function cambioPreguntasBotones(cantidadPreguntas){

	$(".Preguntas").hide();//Oculta los contenedores div de los grupos de preguntas

	$("#Preguntas1").show();//Muestra el primer contenedor llamándolo por su id

	$("#anterior").hide();//Oculta el botón con id = anterior, con el fin de que no aparezca en la primer pantalla. (El botón debe ser creado en el documento HTML)

	$("#enviarRespuestas").hide();//Oculta el botón con id = enviarRespuestas, con el fin de que se muestre solo con el último ítem. (El botón debe ser creado en el documento HTML)

	//Función ejecutada con el evento on click en el botón siguiente (El botón debe ser creado en el documento HTML con id = siguiente) 
	$("#siguiente").on('click',function(){
		var $preguntaVisible = $('div.Preguntas:visible'); //Captura objeto div de la class = Preguntas (ítem visible en el momento).
   		pregunta = "#" + $preguntaVisible.attr('id'); //Captura en la variable "pregunta" el id del objeto div de la class = Preguntas visible en el momento.
		var identificadorSiguientePregunta = obtieneIdSiguientePregunta(pregunta); // Con el llamado a la función, captura el ID del siguiente ítem.
		$(pregunta).hide(); //Oculta el div del ítem visible. 
		$(identificadorSiguientePregunta).show(); // Muestra el div del siguiente ítem.
		totalPreguntas = "#Preguntas" + cantidadPreguntas; //Define Id de la última pregunta a partir del valor pasado como parámetro en la función principal.
		if (identificadorSiguientePregunta == totalPreguntas){ //Muestra el botón enviar respuestas y oculta el botón siguiente en el último ítem. Muestra el botón anterior en los demás casos. 
			$("#siguiente").hide(); //Oculta boton con id = siguiente
			$("#enviarRespuestas").show(); //Muestra botón con id = enviarRespuestas.
		}
		else {
			$("#anterior").show(); //Muestra botón con id = siguiente.
		}
	});
	
	$("#anterior").on('click',function(){
		var $preguntaVisible = $('div.Preguntas:visible'); //Captura objeto div de la class = Preguntas (ítem visible en el momento).
   		pregunta = "#" + $preguntaVisible.attr('id'); //Captura en la variable "pregunta" el id del objeto div de la class = Preguntas visible en el momento.
		var identificadorAnteriorPregunta = obtieneIdAnteriorPregunta(pregunta);// Con el llamado a la función, captura el ID del ítem anterior.
		$(pregunta).hide(); //Oculta el div del ítem visible.
		$(identificadorAnteriorPregunta).show(); // Muestra el div del ítem anterior.
		if (identificadorAnteriorPregunta == "#Preguntas1"){ //Ocultar el botón anterior en el primer ítem. Muestra el botón siguiente y oculta el botón enviar respuestas en los demás casos.
		$("#anterior").hide(); //Oculta botón con id = anterior
		}
		else{
			$("#siguiente").show();  //Muestra botón con id = siguiente.
			$("#enviarRespuestas").hide(); //Oculta botón con id = enviarRespuestas
		}
	});
 
	function obtieneIdSiguientePregunta (pregunta){
		var cadenaPregunta = new Array ();  //Crea arreglo para guardar split
   		cadenaPregunta = pregunta.split('s'); //Divide en dos la cadena "pregunta" antes de 's' y después de 's' 
   		var numeroPregunta = Number(cadenaPregunta[1]); //Convierte cadena a número. 
		var numeroSiguientePregunta = numeroPregunta + 1; //Suma uno al número para navegar al siguiente ítem.
		var textoNumeroSiguientePregunta = numeroSiguientePregunta.toString(); //Convierte cadena a número
		var identificadorSiguientePregunta = "#Preguntas" + textoNumeroSiguientePregunta; //Crea id del siguiente ítem utilizando "textonumeroSiguientepregunta" 
		return identificadorSiguientePregunta;	
	}
	
	function obtieneIdAnteriorPregunta (pregunta){
		var cadenaPregunta = new Array (); //Crea arreglo para guardar split
   		cadenaPregunta = pregunta.split('s'); //Divide en dos la cadena "pregunta" antes de 's' y después de 's'
   		var numeroPregunta = Number(cadenaPregunta[1]); //Convierte cadena a número.
		var numeroAnteriorPregunta = numeroPregunta - 1; //Suma uno al número para navegar al ítem anterior.			
		var textoNumeroAnteriorPregunta = numeroAnteriorPregunta.toString(); //Convierte cadena a número
		var identificadorAnteriorPregunta = "#Preguntas" + textoNumeroAnteriorPregunta; //Crea id del ítem anterior utilizando la variable "textonumeroSiguientepregunta" 
		return identificadorAnteriorPregunta;	
	}
}
