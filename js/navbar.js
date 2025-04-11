document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");
    
    menuToggle.addEventListener("click", function () {
        // Toggle la clase 'hidden' para mostrar u ocultar el menú
        mobileMenu.classList.toggle("hidden");

        // Alternar el atributo `aria-expanded` para accesibilidad
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);

        // Animar el icono (transformarlo en "X")
        if (mobileMenu.classList.contains("hidden")) {
            line1.classList.remove("rotate-45", "translate-y-3");
            line3.classList.remove("-rotate-45", "-translate-y-3");
            line2.classList.remove("opacity-0");
        } else {
            // Cuando el menú se abre (y las líneas se convierten en "X")
            line1.classList.add("rotate-45", "translate-y-3");
            line3.classList.add("-rotate-45", "-translate-y-3");
            line2.classList.add("opacity-0");
        }
    });
});