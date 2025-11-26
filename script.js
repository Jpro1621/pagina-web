document.getElementById("formContacto").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evita que la página se recargue

    const form = event.target;
    const mensaje = document.getElementById("mensaje");

    try {
        const respuesta = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { "Accept": "application/json" }
        });

        if (respuesta.ok) {
            mensaje.textContent = "¡Mensaje enviado correctamente! 🎉";
            mensaje.style.color = "green";
            form.reset();
        } else {
            mensaje.textContent = "Hubo un error al enviar el mensaje.";
            mensaje.style.color = "red";
        }
    } catch (error) {
        mensaje.textContent = "Error de conexión. Intenta nuevamente.";
        mensaje.style.color = "red";
    }
});
