//ALGORITMO DE CAPTURA DE RESPUESTAS---

  var c=0;//variable contador de preguntas correctas
  function respuestas(){//funcion de verificación de las preguntas
  var pregunta1=document.getElementsByName('pregunta1');//obtiene el elemento de html
        var radioSelec;//variable de los valores del radiobutton Seleccionado
    for (var i = 0; i < 3; i++) {//recorrido del rdiobutton
              
    if (pregunta1[i].checked) //comprobación de los radiobuttons seleccionados
      radioSelec=pregunta1[i].value;//obtención del valor de los radiobutons
                              
      if (radioSelec=="m") {//comparación entre el valor obtenido del rb y la respuesta correcta
        c++;//aumento del contador
        
      } else {
        c;
      }
      
 }

 var pregunta2=document.getElementsByName('pregunta2');
 for (var i = 0; i < 3; i++) {
              
    if (pregunta2[i].checked) 
      radioSelec=pregunta2[i].value;
                              
      if (radioSelec=="r") {
        c++;
        
      } else {
        c;
      }
      
 }

 var pregunta3=document.getElementsByName('pregunta3');
 for (var i = 0; i < 3; i++) {
    if (pregunta3[i].checked) {
      radioSelec=pregunta3[i].value;
      if (radioSelec=="w") {
        c++;

      } else {
        c;
      }
    }

  }

var pregunta4=document.getElementsByName('pregunta4');
for (var i = 0; i < 3; i++) {
    if (pregunta4[i].checked) {
      radioSelec=pregunta4[i].value;
      if (radioSelec=="c") {
        c++
      } else {
        c;
      }
    } 
}

var pregunta5=document.getElementsByName('pregunta5');
for (var i = 0; i < 3; i++) {
    if (pregunta5[i].checked) {
      radioSelec=pregunta5[i].value;
      if (radioSelec=="g") {
        c++;
      } else {
        c;
      }
    }
}
  
 var pregunta6=document.getElementsByName('pregunta6');
 for (var i = 0; i < 3; i++) {
     if (pregunta6[i].checked) {
      radioSelec=pregunta6[i].value;
      if (radioSelec=="kk") {
        c++;
      } else {
        c;
      }
     }     
  }
  var pregunta7=document.getElementsByName('pregunta7');
  for (var i = 0; i < 3; i++) {
      if (pregunta7[i].checked) {
        radioSelec=pregunta7[i].value;
        if (radioSelec=="pp") {
          c++;
        } else {
          c;
        }
      }
  }

var pregunta8=document.getElementsByName('pregunta8');
for (var i = 0; i <3; i++) {
    if (pregunta8[i].checked) {
      radioSelec=pregunta8[i].value;
      if (radioSelec=="ww") {
        c++;
      } else {
        c;
      }
    }  
}

var pregunta9=document.getElementsByName('pregunta9');
for (var i = 0; i < 3; i++) {
   if (pregunta9[i].checked) {
    radioSelec=pregunta9[i].value;
    if (radioSelec=="bb") {
      c++;
    }else{
      c;
    }
   }
}

var pregunta10=document.getElementsByName('pregunta10');
for (var i = 0; i < 3; i++) {
    if (pregunta10[i].checked) {
      radioSelec=pregunta10[i].value;
      if (radioSelec=="ff") {
        c++;
      } else {
        c;
      }
    }
  
}

var pregunta11=document.getElementsByName('pregunta11');
for (var i = 0; i < 3; i++) {
    if (pregunta11[i].checked) {
    radioSelec=pregunta11[i].value;
    if (radioSelec=="lll") {
      c++;
    } else {
      c;
    }
  }
}

var pregunta12=document.getElementsByName('pregunta12');
for (var i = 0; i < 3; i++) {
    if (pregunta12[i].checked) {
      radioSelec=pregunta12[i].value;
      if (radioSelec=="rrr") {
        c++;
      } else {
        c;
      }
    }
}

 var pregunta13=document.getElementsByName('pregunta13');
 for (var i = 0; i < 3; i++) {
     if (pregunta13[i].checked) {
      radioSelec=pregunta13[i].value;
      if (radioSelec=="vvv") {
        c++;
      } else {
        c;
      }
     }
 }

 var pregunta14=document.getElementsByName('pregunta14');
 for (var i = 0; i < 3; i++) {
    if (pregunta14[i].checked) {
      radioSelec=pregunta14[i].value;
      if (radioSelec=="ccc") {
        c++;
      } else {
        c;
      }
    }
   
 }

 var pregunta15=document.getElementsByName('pregunta15');
 for (var i = 0; i < 3; i++) {
    if (pregunta15[i].checked) {
      radioSelec=pregunta15[i].value;
      if (radioSelec=="ggg") {
        c++;
      } else {
        c;
      }
    }   
 }

 var pregunta16=document.getElementsByName('pregunta16');
 for (var i = 0; i < 3; i++) {
    if (pregunta16[i].checked) {
      radioSelec=pregunta16[i].value;
      if (radioSelec=="kkkk") {
        c++;
      } else {
        c;
      }
    }
 }

var pregunta17=document.getElementsByName('pregunta17');
for (var i = 0; i < 3; i++) {
    if (pregunta17[i].checked) {
      radioSelec=pregunta17[i].value;
      if (radioSelec=="qqqq") {
        c++;
      } else {
        c;
      }
    }
}

var pregunta18=document.getElementsByName('pregunta18');
for (var i = 0; i < 3; i++) {
    if (pregunta18[i].checked) {
      radioSelec=pregunta18[i].value;
      if (radioSelec=="xxxx") {
        c++;
      } else {
        c;
      }
    }
}

var pregunta19=document.getElementsByName('pregunta19');
for (var i = 0; i < 3; i++) {
    if (pregunta19[i].checked) {
      radioSelec=pregunta19[i].value;
      if (radioSelec=="cccc") {
        c++;
      }else{
        c;
      }
    }
}

var pregunta20=document.getElementsByName('pregunta20');
for (var i = 0; i < 3; i++) {
    if (pregunta20[i].checked) {
      radioSelec=pregunta20[i].value;
      if (radioSelec=="ffff") {
        c++;
      } else {
        c;
      }
    }
}

var pregunta21=document.getElementsByName('pregunta21');
for (var i = 0; i < 3; i++) {
    if (pregunta21[i].checked) {
      radioSelec=pregunta21[i].value;
      if (radioSelec=="kkkkk") {
        c++;
      } else {
        c;
      }
    }
}

var pregunta22=document.getElementsByName('pregunta22');
for (var i = 0; i < 3; i++) {
    if (pregunta22[i].checked) {
      radioSelec=pregunta22[i].value;
      if (radioSelec=="qqqqq") {
        c++;
      } else {
        c;
      }
    }
}

var pregunta23=document.getElementsByName('pregunta23');
for (var i = 0; i < 3; i++) {
    if (pregunta23[i].checked) {
      radioSelec=pregunta23[i].value;
      if (radioSelec=="vvvvv") {
        c++;
      } else {
        c;
      }   
    }
}

var pregunta24=document.getElementsByName('pregunta24');
for (var i = 0; i < 3; i++) {
    if (pregunta24[i].checked) {
      radioSelec=pregunta24[i].value;
      if (radioSelec=="ccccc") {
        c++;
      } else {
        c;
      }
    }
}

var pregunta25=document.getElementsByName('pregunta25');
for (var i = 0; i < 3; i++) {
    if (pregunta25[i].checked) {
      radioSelec=pregunta25[i].value;
      if (radioSelec=="ggggg") {
        c++;
      } else {
        c;
      }
    }
}

var pregunta26=document.getElementsByName('pregunta26');
for (var i = 0; i < 3; i++) {
    if (pregunta26[i].checked) {
      radioSelec=pregunta26[i].value;
      if (radioSelec=="kkkkkk") {
        c++;
      } else {
        c;
      }
    }
}

var pregunta27=document.getElementsByName('pregunta27');
for (var i = 0; i < 3; i++) {
    if (pregunta27[i].checked) {
      radioSelec=pregunta27[i].value;
      if (radioSelec=="rrrrrr") {
        c++;
      } else {
        c;
      }
    }
}

var pregunta28=document.getElementsByName('pregunta28');
for (var i = 0; i < 3; i++) {
    if (pregunta28[i].checked) {
      radioSelec=pregunta28[i].value;
      if (radioSelec=="wwwwww") {
        c++;
      } else {
        c;
      }
    }
}

var pregunta29=document.getElementsByName('pregunta29');
for (var i = 0; i < 3; i++) {
    if (pregunta29[i].checked) {
      radioSelec=pregunta29[i].value;
      if (radioSelec=="cccccc") {
        c++;
      } else {
        c;
      }
    }
}

var pregunta30=document.getElementsByName('pregunta30');
for (var i = 0; i < 3; i++) {
     if (pregunta30[i].checked) {
      radioSelec=pregunta30[i].value;
      if (radioSelec=="ffffff") {
        c++;
      } else {
        c;
      }
     } 
}

var pregunta31=document.getElementsByName('pregunta31');
for (var i = 0; i < 3; i++) {
    if (pregunta31[i].checked) {
      radioSelec=pregunta31[i].value;
      if (radioSelec=="kkkkkkk") {
        c++;
      } else {
        c;
      }
    }
}

var pregunta32=document.getElementsByName('pregunta32');
for (var i = 0; i < 3; i++) {
    if (pregunta32[i].checked) {
      radioSelec=pregunta32[i].value;
      if (radioSelec=="qqqqqqq") {
        c++;
      } else {
        c;
      }
    }
}

  alert("Preguntas correctas "+c);//imprime 
//return respuestas();
  
//FUNCIÓN DE COMPARACIÓN DE LA BAREMACIÓN

  function baremacionMemoria(){//funcion de comparación de puntajes
  var puntajeConvertido;//variable de puntaje convertido
  var escala;//variable de escala
    if (c<=5) {//comparación de respuestas correctas con el puntaje directo
    puntajeConvertido=1;//puntaje dado según comparación de baremación 
    escala="Muy Bajo";//puntaje de acuerdo a la escala
    }
    if (c==6 || c==7) {
      puntajeConvertido=2;
      escala="Muy Bajo";
    }

    if (c==8) {
      puntajeConvertido=3;
      escala="Muy Bajo";
    }

    if (c==9) {
      puntajeConvertido=4;
      escala="Muy Bajo";
    }

    if (c==10) {
      puntajeConvertido=6;
      escala="Bajo";
    }

    if (c==11) {
      puntajeConvertido=9;
      escala="Bajo";
    }

    if (c==12) {
      puntajeConvertido=13;
      escala="Bajo";
    }

    if (c==13) {
      puntajeConvertido=15;
      escala="Medio Bajo";
    }

    if (c==14) {
      puntajeConvertido=20;
      escala="Medio Bajo";
    }

    if (c==15) {
      puntajeConvertido=23;
      escala="Medio Bajo";
    }

    if (c==16) {
      puntajeConvertido=30;
      escala="Medio";
    }

    if (c==17) {
      puntajeConvertido=38;
      escala="Medio";
    }  

    if (c==18) {
      puntajeConvertido=41;
      escala="Medio";
    }

    if (c==19) {
      puntajeConvertido=50;
      escala="Medio";
    }

    if (c==20) {
      puntajeConvertido=54;
      escala="Medio";
    }

    if (c==21) {
      puntajeConvertido=59;
      escala="Medio";
    }

    if (c==22) {
      puntajeConvertido=62;
      escala="Medio";
    }

    if (c==23) {
      puntajeConvertido=70;
      escala="Medio Alto";
    }

    if (c==24) {
      puntajeConvertido=73;
      escala="Medio Alto";
    }

    if (c==25) {
      puntajeConvertido=80;
      escala="Medio Alto";
    }

    if (c==26) {
      puntajeConvertido=82;
      escala="Medio Alto";
    }

    if (c==27) {
      puntajeConvertido=87;
      escala="Alto";
    }

    if (c==28) {
      puntajeConvertido=89;
      escala="Alto";
    }

    if (c==29) {
      puntajeConvertido=94;
      escala="Muy Alto";
    }

    if (c==30) {
      puntajeConvertido=96;
      escala="Muy Alto";
    }

    if (c==31) {
      puntajeConvertido=98;
      escala="Muy Alto";
    }

    if (c==32) {
      puntajeConvertido=100;
      escala="Muy Alto";
    }


  alert("Puntaje Final "+puntajeConvertido+" Puntaje escala "+escala); // imprime
  }
  baremacionMemoria();//instanciamiento de la función
}



  

