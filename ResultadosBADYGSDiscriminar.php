<!DOCTYPE html>
<html>
<head>
	<title>Resultados BADYG S</title>
	<meta charset="utf-8">
</head>
<body>
<?php
echo "<b>Discriminar Diferencias</b><br>";
$CorrectasDD=$_COOKIE["CorrDD"];
$BaremacionDD=$_COOKIE["BareDD"];
$EscalaDD=$_COOKIE["EsclDD"];
echo "Puntaje Directo Obtenido por el estudiante ".$CorrectasDD." Baremación ".$BaremacionDD."% Escala ".$EscalaDD;
?>
</body>
</html>