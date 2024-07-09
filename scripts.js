document.addEventListener('DOMContentLoaded', function () {
    // Carrusel de Bootstrap
    $('.carousel').carousel();

    // Cambio de tema oscuro / claro
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    });
});