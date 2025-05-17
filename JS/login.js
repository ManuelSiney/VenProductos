document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); /* Previene que el formulario se envíe automáticamente al server. */

    const usuario = document.getElementById("usuario").value;
    const pass = document.getElementById("pass").value;

    //Simulcion de Login
    if(usuario === "admin" && pass === "12345"){
        window.location.href = "../private/dashboard.html"; // Redirige a la página de inicio
    }
    else{
        document.getElementById("mensajeLogin").textContent = "Usuario o contraseña incorrecta";
    }
})