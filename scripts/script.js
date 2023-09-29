const $hero = document.getElementById("hero");
const $footer = document.getElementById("footer");

let xhr = new XMLHttpRequest();
let xhrdos = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status === 200) {
    $hero.innerHTML = xhr.responseText;

    // Agrega el evento al botón después de cargar el contenido
    const button = document.getElementById("toggle");
    const navItems = document.querySelector(".nav__items");
    const body = document.getElementById("body");

    button.addEventListener("click", () => {
      button.classList.toggle("activo");
      if (button.classList.contains("activo")) {
          navItems.style.display = "block"; // Muestra el menú
          document.body.style.overflowY = "hidden"; // Oculta el desplazamiento horizontal en el cuerpo
      } else {
          navItems.style.display = "none"; // Oculta el menú
          document.body.style.overflowY = "scroll"; // Oculta el desplazamiento horizontal en el cuerpo
          
      }
  });
  
  }
};

xhrdos.onload = function () {
  if (xhrdos.status === 200) {
    $footer.innerHTML = xhrdos.responseText;
  }
};

xhr.open("GET", "../template/header.html", true);
xhr.send();

xhrdos.open("GET", "../template/footer.html", true);
xhrdos.send();

