<html>
    <head>
        <meta charset="UTF-8">
    </head> 
    <body>
      <!--div style="text-align:center;"##Para IExplorer-->
	  <table border="5" style="margin: 0 auto;">
<?php 
    $nombre = $_GET["nombre"];
    $passwd = $_GET["passwd"];
    $email = $_GET["email"];
    $medio = $_GET["medio"];
    $textoArea = $_GET["textoArea"];
		echo "<tr>
			<td>Nombre:</td>
			<td>$nombre</td>
		</tr>
		<tr>
			<td>Contraseña:</td>
			<td>$passwd</td>
		</tr>
		<tr>
			<td>E-mail:</td>
			<td>$email</td>
		</tr>
		<tr>
			<td>Medio por el que nos conoció:</td>
			<td>$medio</td>
		</tr>
                <tr>
			<td>Datos adicionales:</td>
			<td>$textoArea</td>
		</tr>"
?>
	  </table>
     <!--/div-->
    </body>
</html>
