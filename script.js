 // Obtener el formulario de inicio de sesión
const loginForm = document.getElementById("login-form");

// Añadir un evento de envío al formulario
loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de usuario y contraseña ingresados
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Verificar las credenciales (usuario: admin, contraseña: 123)
  if (username === "admin" && password === "123") {
    // Mostrar el menú y ocultar el formulario de inicio de sesión
    document.getElementById("menu").style.display = "block";
    loginForm.style.display = "none";
  } else {
    alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
  }
});

// Obtener el elemento del menú
var menu = document.getElementById("menu");

// Obtener la posición actual de desplazamiento
var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

// Verificar el desplazamiento al hacer scroll
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
  if (currentScrollPos > scrollPos) {
    // Scrolling hacia abajo, ocultar el menú
    menu.classList.add("hidden");
  } else {
    // Scrolling hacia arriba, mostrar el menú
    menu.classList.remove("hidden");
  }
  
  // Actualizar la posición de desplazamiento
  scrollPos = currentScrollPos;
};
