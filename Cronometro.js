//Cronometro 
function tiempo(min){//Función principal del cronometro
var segundos=0;//inicialización de la variable segundos
var minutos=min; //inicialización de la variable minutos según parametro en html
var tiempos=function(){//función de control cronometro
	segundos=segundos-1;// asignación valor a variable para iniciarla
	if(segundos<0)//ciclo para cronometro, avanza según los segundos transcurridos
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
		setTimeout(tiempos,1000);// tiempo a recorrer por el ciclo cronometro por segundo
	}	
	if (segundos==0 && minutos==0) {//comparar tiempo para finalizar y accionar el botón
		btn.onclick=compararRespuestas(this);//acciona el botón enviar
		btn.click();
		btn2.onclick=despedida();//acciona el botón para pasar de cuestionario y su función
		btn2.click();
	}
}
return tiempos();
}