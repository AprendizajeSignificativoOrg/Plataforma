<!DOCTYPE html>
<html>
<head>
	<title>Resultados BADYG S</title>
	<meta charset="utf-8">
</head>
<body>
<?php
echo "<b>Completar Oraciones</b><br>";
$CorrectasCO=$_COOKIE["CorrCO"];
$BaremacionCO=$_COOKIE["BareCO"];
$EscalaCO=$_COOKIE["EsclCO"];
echo "Puntaje Directo Obtenido por el estudiante ".$CorrectasCO." Baremación ".$BaremacionCO."% Escala ".$EscalaCO;
?>
</body>
</html>