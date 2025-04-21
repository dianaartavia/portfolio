function setupClickEvents() {
    document.querySelectorAll('.card-clickable').forEach(card => {
        card.addEventListener('click', function (e) {
            const info = card.querySelector('.info-content');
            const isVisible = info.classList.contains('opacity-100');

            // Cierra todos los overlays
            document.querySelectorAll('.info-content').forEach(i => i.classList.remove('opacity-100'));

            // Si no estaba visible, se abre
            if (!isVisible) {
                info.classList.add('opacity-100');
            }

            e.stopPropagation();
        });
    });

    // Cierra todos si se hace clic afuera
    document.addEventListener('click', function () {
        document.querySelectorAll('.info-content').forEach(i => i.classList.remove('opacity-100'));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupClickEvents();
});
