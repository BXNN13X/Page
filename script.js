document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
});
// Función para mostrar una sección y ocultar las demás
function showSection(sectionId) {
    // Ocultamos todas las secciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Mostramos la sección seleccionada
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.remove('hidden');
}
