function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];

	title.innerHTML = "Por favor inicia sesion";
	email.placeholder = "Correo Electronico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar Sesion";
} 
translate();
function mostrar(){
	var correo = document.getElementById("inputEmail").value;
	var email = document.getElementById("inputPassword").value;
	document.getElementById("usuario").innerHTML = "Datos del formulario";
	document.getElementById("datos").innerHTML= "El correo ingresado es : <br>" + correo +"<br> La clave ingresada es <br>" + email;
}