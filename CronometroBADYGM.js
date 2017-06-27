//Cronometro 
function tiempo(sec,min){//Función principal del cronometro
var segundos=sec;//inicialización de la variable segundos
var minutos=min; //inicialización de la variable minutos según parametro (html)
var tiempos=function(){//función de control cronometro
	segundos=segundos-1;// asignación valor a variable
	if(segundos<0)//ciclo para cronometro
	{
		segundos=59;//asignación del valor 
		minutos=minutos-1;//asignación de valor a varible
	}
	form.second.value=segundos;// imprime segundos
	form.minute.value=minutos;//imprime minutos
	if(minutos<0)//ciclo para finalizar cronometro
	{
		form.second.value=0;//imprime variable en 0
		form.minute.value=0;//imprime variable en 0
	}else{
		setTimeout(tiempos,1000);// tiempo de recorrido del ciclo cronometro
	}
		if (segundos==0 && minutos==0) {//comparar tiempo para finalizar y accionar el botón
		btn.onclick=compararRespuestas(this);//acciona el boton enviar
		btn.click();
		btn2.onclick=despedida();
		btn2.click();
	}
}
return tiempos();
}