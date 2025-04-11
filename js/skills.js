document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".skill-item").forEach((item) => {
        const img = item.querySelector("img"),
            code = item.querySelector("span"),
            text = item.getAttribute("data-code");

        let timeoutId = null;
        let typingTimeoutId = null;
        let isTyping = false;

        function effectText(elemento, texto, i = 0) {
            elemento.textContent = "";
            
            function typing() {
                if (i < texto.length) {
                    elemento.textContent += texto[i];
                    typingTimeoutId = setTimeout(() => typing(), 50);
                    i++;
                } else {
                    timeoutId = setTimeout(() => resetEffect(), 5000);
                }
            }
            typing();
        }

        function resetEffect() {
            clearTimeout(typingTimeoutId);
            clearTimeout(timeoutId);
            img.classList.remove("hidden");
            code.classList.add("hidden");
            code.textContent = "";
            isTyping = false; // ¡Esta línea es clave!
        }

        // Evento en el contenedor (mejorado)
        item.addEventListener("click", (e) => {
            if (e.target === img || e.target === item) {
                resetEffect(); // Limpia cualquier estado previo
                img.classList.add("hidden");
                code.classList.remove("hidden");
                effectText(code, text);
                isTyping = true;
            }
        });

        // Evento en el texto (simplificado)
        code.addEventListener("click", (e) => {
            e.stopPropagation();
            resetEffect(); // Solo restablece al ícono
        });
    });
});
