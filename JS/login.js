document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault(); /* Previene que el formulario se envíe automáticamente al server. */

    const usuario = document.getElementById("input-field").value;
    const pass = document.getElementById("input-field2").value;

    //Simulcion de Login
    if(usuario === "admin" && pass === "12345"){
        window.location.href = "../private/dashboard.html"; // Redirige a la página de inicio
    }
    else{
        document.getElementById("mensajeLogin").textContent = "Usuario o contraseña incorrecta";
    }
})