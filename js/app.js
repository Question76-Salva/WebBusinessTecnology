// ======================================================
// === seleccionar elementos | para agregarle eventos ===
// ======================================================
const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
const fecha = document.querySelector('.fecha');

// =====================================
// === eventos | mejorar performance ===
// =====================================
document.addEventListener('DOMContentLoaded', () => {
    // === carga todo el html | hace un callback y ejecuta las funciones === 
    mostrarMenu();
    cerrarMenu();
    fechaActual();
}); 
    

// =================
// === funciones ===
// =================
function mostrarMenu() {
    // === agregar evento a un elemento seleccionado ===
    hamburguesa.addEventListener('click', () => {
        // === al hacer click en menú la clase 'ocultar' desaparece | o aparece en caso contrario ===
        navegacion.classList.toggle('ocultar');
    });
};

function cerrarMenu() {
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            // === comprobar que etiqueta actua al hacer click ===
            //console.log(e.target.tagName);

            // === crear evento ===
            if(e.target.tagName === 'A') {
                // === añade clase | ocultar ===
                navegacion.classList.add('ocultar');
            }
        });
    });
};

function fechaActual() {
    // === obtener año actual ===
    let fechaHoy = new Date().getFullYear();
    // === insertar fecha en el span | inyectar en el html ===
    fecha.textContent = fechaHoy;
}