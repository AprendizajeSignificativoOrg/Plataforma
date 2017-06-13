<!DOCTYPE html>
<html>
<head>
	<title>Resultados BADYG S</title>
	<meta charset="utf-8">
</head>
<body>
<?php
echo "<b>Series Numéricas</b><br>";
$CorrectasSN=$_COOKIE["CorrSN"];
$BaremacionSN=$_COOKIE["BareSN"];
$EscalaSN=$_COOKIE["EsclSN"];
echo "Puntaje Directo Obtenido por el estudiante ".$CorrectasSN." Baremación ".$BaremacionSN."% Escala ".$EscalaSN;
?>
</body>
</html>