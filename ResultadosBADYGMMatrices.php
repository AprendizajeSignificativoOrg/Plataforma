<!DOCTYPE html>
<html>
<head>
	<title>Resultados BADYG M</title>
	<meta charset="utf-8">
</head>
<body>
<?php
echo "<b>Matrices De Figuras</b><br>";
$CorrectasMF=$_COOKIE["CorrMF"];
$BaremacionMF=$_COOKIE["BareMF"];
$EscalaMF=$_COOKIE["EsclMF"];
echo "Puntaje Directo Obtenido por el estudiante ".$CorrectasMF." Baremación ".$BaremacionMF."% Escala ".$EscalaMF;
?>
</body>
</html>