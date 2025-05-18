// Aquí puedes incluir funcionalidades como animaciones, menú móvil, etc.
document.addEventListener('DOMContentLoaded', () => {
  console.log('Entours RD listo');
});


// Booking

document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const activity = document.getElementById('activity').value;
  const date = document.getElementById('date').value;
  const people = document.getElementById('people').value;

  const message = `Hola Entours RD! Quisiera reservar:\n\n` +
                  `Nombre: ${name}\n` +
                  `Actividad: ${activity}\n` +
                  `Fecha: ${date}\n` +
                  `Personas: ${people}`;
                  alert("Gracias por contactarnos. Serás redirigido a WhatsApp.");


  const whatsappNumber = "18094050662"; 
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, '_blank');
});

//Contacto 

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const mensaje = document.getElementById('mensaje').value;

  const texto = `Hola Entours RD!%0A%0A` +
                `Nombre: ${nombre}%0A` +
                `Correo: ${correo}%0A` +
                `Mensaje: ${mensaje}`;

                alert("Gracias por contactarnos. Serás redirigido a WhatsApp.");

  const numeroWhatsApp = "18094050662"; 
  window.open(`https://wa.me/${numeroWhatsApp}?text=${texto}`, '_blank');
});

document.getElementById('year').textContent = new Date().getFullYear();


// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// Botón volver arriba
const btnTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  btnTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fade-in animation
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));
