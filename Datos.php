<!DOCTYPE html>
<html>
<head>
	<title>Datos</title>
	<meta charset="utf-8">
</head>
<body>
<?php
echo "<b>Datos Estudiante</b><br>";
$Nombre=$_COOKIE["Nombre"];
$Apellidos=$_COOKIE["Apellidos"];
$Colegio=$_COOKIE["Colegio"];
$Curso=$_COOKIE["Curso"];
echo "Nombre ".$Nombre." Apellidos ".$Apellidos." Colegio ".$Colegio." Curso ".$Curso;
?>
</body>
</html>
