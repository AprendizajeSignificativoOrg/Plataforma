function Datos() {
			var nombre =document.getElementById('nombre');//captura de elementos del formulario
			var apellidos =document.getElementById('apellidos');
			var colegio =document.getElementById('colegio');
			var curso =document.getElementById('curso');
			if (curso.value=="11") {
				window.open('http://localhost/BADYGS/analogiasVerbales/BienvenidaAnalogias.html');//abre enlace a las pruebas correspondientes
			}
			if (curso.value=="10") {
				window.open('http://localhost/BADYGM/analogiasVerbales/BienvenidaBADYGMAnalogias.html');
			}
			if (curso.value=="9") {
				window.open('http://localhost/BADYGM/analogiasVerbales/BienvenidaBADYGMAnalogias.html');
			}
				document.cookie="Nombre ="+nombre.value;//creación de cookie con los valores del form
				document.cookie="Apellidos ="+apellidos.value;
				document.cookie="Colegio ="+colegio.value;
				document.cookie="Curso ="+curso.value;
		}		