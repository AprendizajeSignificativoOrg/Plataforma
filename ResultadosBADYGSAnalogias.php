<!DOCTYPE html>
<html>
<head>
	<title>Resultados BADYG S</title>
	<meta charset="utf-8">
</head>
<body>
<?php
echo "<b>Analogias Verbales</b><br>";
$CorrectasAV=$_COOKIE["CorrAV"];
$BaremacionAV=$_COOKIE["BareAV"];
$EscalaAV=$_COOKIE["EsclAV"];
echo "Puntaje Directo Obtenido por el estudiante ".$CorrectasAV." Baremación ".$BaremacionAV."% Escala ".$EscalaAV;
?>
</body>
</html>
