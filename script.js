document.getElementById("formContacto").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let motivo = document.getElementById("motivo").value.trim();
    let mensaje = document.getElementById("mensaje");

    if (nombre === "" || correo === "" || motivo === "") {
        mensaje.style.color = "red";
        mensaje.textContent = "Todos los campos son obligatorios.";
        return;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        mensaje.style.color = "red";
        mensaje.textContent = "El correo electrónico no es válido.";
        return;
    }

    mensaje.style.color = "green";
    mensaje.textContent = "Formulario enviado correctamente ✔";
});
