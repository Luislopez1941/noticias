function mostrarSeccion(seccionId) {
    // Obtener todas las secciones con la clase 'deportes'
    const secciones = document.querySelectorAll('.criptomonedas');
    
    // Ocultar todas las secciones
    secciones.forEach((seccion) => {
        seccion.style.display = 'none';
    });
    
    // Mostrar la sección seleccionada
    const seccionSeleccionada = document.getElementById(seccionId);
    seccionSeleccionada.style.display = 'block';
}