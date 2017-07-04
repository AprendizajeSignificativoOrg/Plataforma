//ALGORITMO PASAR PREGUNTAS/BARRA DE PROGRESO/BARRA DE PREGUNTAS
function mostrar(){
/*Función ready BOTONES
pasa pregunta a pregunta por medio de los botones anterior/siguiente
muestra el boton enviar al mostrar la última pregunta*/
	$(document).ready(function(){//acciona la función ready cuando el documento de carga
	$(".Preguntas").hide();//Oculta los contenedores div solo muestra el primero llamandolos por su class
	$("#Preguntas1").show();
	$("#anterior").hide();
	$("#btn").hide();+
	$("#siguiente").on('click',function(){
		var preguntaVisible=$('div.Preguntas:visible');
		var pregunta="#"+preguntaVisible.attr('id');
		var identificadorSiguiente=obtieneSiguiente(pregunta);
		$(pregunta).hide();
		$(identificadorSiguiente).show();
		if (identificadorSiguiente=="#Preguntas32") {
			$("#siguiente").hide();
			$("#btn").show();
		} else {
			$("#anterior").show();
		}
	});
	$("#anterior").on('click',function(){
		var preguntaVisible=$('div.Preguntas:visible');
		var pregunta="#"+preguntaVisible.attr('id');
		var identificadorAnterior=obtieneAnterior(pregunta);
		$(pregunta).hide();
		$(identificadorAnterior).show();
		if (identificadorAnterior=="#Preguntas1") {
			$("#anterior").hide();
		} else {
			$("#siguiente").show();
			$("#btn").hide();
		}
	});
	function obtieneAnterior(pregunta){
		var cadenaPregunta=new Array();
		cadenaPregunta=pregunta.split('s');
		var numeroPregunta=Number(cadenaPregunta[1]);
		var numeroAnterior=numeroPregunta-1;
		var textoNumeroAnterior=numeroAnterior.toString();
		var identificadorAnterior="#Preguntas"+textoNumeroAnterior;
		return identificadorAnterior;
	}
	function obtieneSiguiente(pregunta){
		var cadenaPregunta=new Array();
		cadenaPregunta=pregunta.split('s');
		var numeroPregunta=Number(cadenaPregunta[1]);
		var numeroSiguiente=numeroPregunta+1;
		var textoNumeroSiguiente=numeroSiguiente.toString();
		var identificadorSiguiente="#Preguntas"+textoNumeroSiguiente;
		return identificadorSiguiente;
	}
	

/* Función ready RADIOBUTTONS- BARRA DE PROGRESO
pasa pregunta a pregunta por medio de los radiobuttons
cambia el color del enlace de la pregunta que se constesta
oculta el boton enviar y lo muestra al contestar la última pregunta
cambia el value de la barra de progreso según la variable de aumento*/
		var value=0;//variable de aumento para la barra de progreso
		$("input[name=pregunta1]").click(function(){//asigna la función click al grupo de radiobuttons llamados por su nombre
			$("#p1").css("color","#14BB08");//asigna color al enlace cuando un rb es seleccionado
			value=value+3.125;//aumenta variable cuando un rb es seleccionado
			$("#barraProgreso").val(value);//asignación de variable aumento a la barra de progreso
			$("#Preguntas1").next().show();//muestra el contenedor siguiente al actual llamado por el id del actual
			$("#Preguntas1").hide();//oculta el contenedor actual por su id
		});//fin función click
		$("input[name=pregunta2]").click(function(){
			$("#p2").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas2").next().show();
			$("#Preguntas2").hide();
		});
		$("input[name=pregunta3]").click(function(){
			$("#p3").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas3").next().show();
			$("#Preguntas3").hide();
		});
		$("input[name=pregunta4]").click(function(){
			$("#p4").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas4").next().show();
			$("#Preguntas4").hide();
		});
		$("input[name=pregunta5]").click(function(){
			$("#p5").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas5").next().show();
			$("#Preguntas5").hide();
		});
		$("input[name=pregunta6]").click(function(){
			$("#p6").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas6").next().show();
			$("#Preguntas6").hide();
		});
		$("input[name=pregunta7]").click(function(){
			$("#p7").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas7").next().show();
			$("#Preguntas7").hide();
		});
		$("input[name=pregunta8]").click(function(){
			$("#p8").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas8").next().show();
			$("#Preguntas8").hide();
		});
		$("input[name=pregunta9]").click(function(){
			$("#p9").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas9").next().show();
			$("#Preguntas9").hide();
		});
		$("input[name=pregunta10]").click(function(){
			$("#p10").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas10").next().show();
			$("#Preguntas10").hide();
		});
		$("input[name=pregunta11]").click(function(){
			$("#p11").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas11").next().show();
			$("#Preguntas11").hide();
		});
		$("input[name=pregunta12]").click(function(){
			$("#p12").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas12").next().show();
			$("#Preguntas12").hide();
		});		
		$("input[name=pregunta13]").click(function(){
			$("#p13").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas13").next().show();
			$("#Preguntas13").hide();
		});
		$("input[name=pregunta14]").click(function(){
			$("#p14").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas14").next().show();
			$("#Preguntas14").hide();
		});
		$("input[name=pregunta15]").click(function(){
			$("#p15").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas15").next().show();
			$("#Preguntas15").hide();
		});
		$("input[name=pregunta16]").click(function(){
			$("#p16").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas16").next().show();
			$("#Preguntas16").hide();
			$("#Barra2").show();//muestra el contenedor de la barra de preguntas siguiente por id
			$("#Barra1").hide();//oculta el contenedor de la barra de preguntas actual por id
		});
		$("input[name=pregunta17]").click(function(){
			$("#p17").css("color","#14BB08");value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas17").next().show();
			$("#Preguntas17").hide();
		});
		$("input[name=pregunta18]").click(function(){
			$("#p18").css("color","#14BB08");value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas18").next().show();
			$("#Preguntas18").hide();
		});
		$("input[name=pregunta19]").click(function(){
			$("#p19").css("color","#14BB08");value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas19").next().show();
			$("#Preguntas19").hide();
		});
		$("input[name=pregunta20]").click(function(){
			$("#p20").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas20").next().show();
			$("#Preguntas20").hide();
		});
		$("input[name=pregunta21]").click(function(){
			$("#p21").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas21").next().show();
			$("#Preguntas21").hide();
		});
		$("input[name=pregunta22]").click(function(){
			$("#p22").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas22").next().show();
			$("#Preguntas22").hide();
		});
		$("input[name=pregunta23]").click(function(){
			$("#p23").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas23").next().show();
			$("#Preguntas23").hide();
		});
		$("input[name=pregunta24]").click(function(){
			$("#p24").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas24").next().show();
			$("#Preguntas24").hide();
		});
		$("input[name=pregunta25]").click(function(){
			$("#p25").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas25").next().show();
			$("#Preguntas25").hide();
		});
		$("input[name=pregunta26]").click(function(){
			$("#p26").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas26").next().show();
			$("#Preguntas26").hide();
		});
		$("input[name=pregunta27]").click(function(){
			$("#p27").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas27").next().show();
			$("#Preguntas27").hide();
		});
		$("input[name=pregunta28]").click(function(){
			$("#p28").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas28").next().show();
			$("#Preguntas28").hide();
		});
		$("input[name=pregunta29]").click(function(){
			$("#p29").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas29").next().show();
			$("#Preguntas29").hide();
		});
		$("input[name=pregunta30]").click(function(){
			$("#p30").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas30").next().show();
			$("#Preguntas30").hide();
		});
		$("input[name=pregunta31]").click(function(){
			$("#p31").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#Preguntas31").next().show();
			$("#Preguntas31").hide();
		});
		$("input[name=pregunta32]").click(function(){
			$("#p32").css("color","#14BB08");
			value=value+3.125;
			$("#barraProgreso").val(value);
			$("#btn").show();//muestra el boton enviar por su id
		});
/*Función BARRA DE PREGUNTAS
por medio de enlaces pasa de una pregunta a otra ocultando la actual en pantalla
muestra el boton enviar al seleccionar la última pregunta*/
		$("#Barra2").hide();//oculta el contenedor de la barra de preguntas según su id	
		$("#b1").hover(function(){//asigna la función hover al enlace según su id para accionar la función cuando el cursor se encuentra sobre el
			$("#Barra2").show();//muestra el contenedor de barra de preguntas según su id
			$("#Barra1").hide();
		},
			function(){//acciona la funcion cuando el cursor no se encuentra sobre el
			$("#Barra1").hide();//oculta el contenedor de barra de preguntas según su id
		});//fin función hover
		$("#b2").hover(function(){
			$("#Barra1").show();},
			function(){
			$("#Barra2").hide();
		});
		$("#p1").click(function(){//asigna la función click al enlace según su id para accionar la función
			$(".Preguntas").hide();//oculta los contenedores de barra de preguntas según su class
			$("#Preguntas1").show();//muestra el contenedor de barra de preguntas según su id
		});//fin función click
		$("#p2").click(function(){//asigna la función click al enlace según su id para accionar la función
			$(".Preguntas").hide();//oculta los contenedores de barra de preguntas según su class
			$("#Preguntas2").show();//muestra el contenedor de barra de preguntas según su id
		});//fin función click
		$("#p3").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas3").show();
			});
		$("#p4").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas4").show();
			});
		$("#p5").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas5").show();
			});
		$("#p6").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas6").show();
			});
		$("#p7").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas7").show();
			});
		$("#p8").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas8").show();
			});
		$("#p9").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas9").show();
			});
		$("#p10").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas10").show();
			});
		$("#p11").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas11").show();
			});
		$("#p12").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas12").show();
			});
		$("#p13").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas13").show();
			});
		$("#p14").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas14").show();
			});
		$("#p15").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas15").show();
			});
		$("#p16").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas16").show();
			});
		$("#p17").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas17").show();
			});
		$("#p18").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas18").show();
			});
		$("#p19").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas19").show();
			});
		$("#p20").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas20").show();
			});
		$("#p21").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas21").show();
			});
		$("#p22").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas22").show();
			});
		$("#p23").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas23").show();
			});
		$("#p24").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas24").show();
			});
		$("#p25").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas25").show();
			});
		$("#p26").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas26").show();
			});
		$("#p27").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas27").show();
			});
		$("#p28").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas28").show();
			});
		$("#p29").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas29").show();
			});
		$("#p30").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas30").show();
			});
		$("#p31").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas31").show();
			});
		$("#p32").click(function(){
			$(".Preguntas").hide();
			$("#Preguntas32").show();
				$("#btn").show();//muestra el boton enviar por su id
		});
	});//fin función ready
}