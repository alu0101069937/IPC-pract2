function validarEmail(email) {
  var comparaEmail = /^(\w{2,})+@{1}(\w{3,})+\.(\w{2,})$/;
	if(!email.match(comparaEmail)) {
	  alert("Dirección de correo NO válida.\nUse formato ab+@abc+.ab+");
	  return false;
	  }	  
	}
// Prohibido campos 'nombre' y 'passwd' VACÍOS --> con la etiqueta REQUIRED en el html.
