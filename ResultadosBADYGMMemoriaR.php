<!DOCTYPE html>
<html>
<head>
	<title>Resultados BADYG M</title>
	<meta charset="utf-8">
</head>
<body>
<?php
echo "<b>Memoria Del Relato Oral</b><br>";
$CorrectasMR=$_COOKIE["CorrMR"];
$BaremacionMR=$_COOKIE["BareMR"];
$EscalaMR=$_COOKIE["EsclMR"];
echo "Puntaje Directo Obtenido por el estudiante ".$CorrectasMR." Baremación ".$BaremacionMR."% Escala ".$EscalaMR;
?>
</body>
</html>