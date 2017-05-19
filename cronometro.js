//Cronometro 


var segundos=0;
var minutos=1; 
function tiempo(){


	segundos=segundos-1;
	if(segundos<0)
	{
		segundos=59;
		minutos=minutos-1;
	}
	form.second.value=segundos;

	form.minute.value=minutos;
	if(minutos<0)
	{
		form.second.value=0;
		form.minute.value=0;
	}else{
		setTimeout("tiempo()",1000);
	}
	
	if (segundos==0 && minutos==0) {
		btn.onclick=compararRespuestas(this);
		btn.click();
	}

}