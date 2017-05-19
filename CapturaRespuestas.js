function respuestaPrueba(arregloRespuestas){//función para captura

	 	for (var j =1; j < 33; j++) {//recorido del arreglo de captura
	 	 	 	 
	 		var pregunta=document.getElementsByName("pregunta"+j);//captura de pregunta
			for (var i = 0; i < pregunta.length; i++) {//recorrido de pregunta
				if (pregunta[i].checked==true) {//verificación del radioButton seleccionado
					//alert("Respuesta seleccionada "+pregunta[i].value);//alert del valor rb seleccionado
					arregloRespuestas[j]=pregunta[i].value;//captura del valor del rb en el arreglo
				}
			}
		}
	}