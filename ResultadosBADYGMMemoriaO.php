<!DOCTYPE html>
<html>
<head>
	<title>Resultados BADYG M</title>
	<meta charset="utf-8">
</head>
<body>
<?php
echo "<b>Memoria Visual Ortográfica</b><br>";
$CorrectasMO=$_COOKIE["CorrMO"];
$BaremacionMO=$_COOKIE["BareMO"];
$EscalaMO=$_COOKIE["EsclMO"];
echo "Puntaje Directo Obtenido por el estudiante ".$CorrectasMO." Baremación ".$BaremacionMO."% Escala ".$EscalaMO;
?>
</body>
</html>