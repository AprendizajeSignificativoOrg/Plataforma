<!DOCTYPE html>
<html>
<head>
	<title>Resultados BADYG S</title>
	<meta charset="utf-8">
</head>
<body>
<?php
echo "<b>Problemas Numéricos</b><br>";
$CorrectasPN=$_COOKIE["CorrPN"];
$BaremacionPN=$_COOKIE["BarePN"];
$EscalaPN=$_COOKIE["EsclPN"];
echo "Puntaje Directo Obtenido por el estudiante ".$CorrectasPN." Baremación ".$BaremacionPN."% Escala ".$EscalaPN;
?>
</body>
</html>