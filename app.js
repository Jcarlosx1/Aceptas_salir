/* const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let attempts = 0;

// Evento cuando intentan acercarse al NO
noBtn.addEventListener("mouseover", () => {
    attempts++;

    // Movimiento MUCHO más amplio (pantalla completa)
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    // El botón NO se hace más pequeño
    let noSize = Math.max(10, 18 - attempts * 0.5);
    noBtn.style.fontSize = noSize + "px";

    // El botón SI crece más agresivamente
    let yesSize = 18 + attempts * 3;
    yesBtn.style.fontSize = yesSize + "px";

    // El botón SI se centra poco a poco
    yesBtn.style.position = "fixed";
    yesBtn.style.left = "50%";
    yesBtn.style.top = "50%";
    yesBtn.style.transform = "translate(-50%, -50%)";

    // Después de MUCHOS intentos
    if (attempts > 12) {
        noBtn.style.display = "none";

        // El botón SI domina la pantalla
        yesBtn.style.fontSize = "60px";
        yesBtn.style.padding = "30px 50px";
        yesBtn.textContent = "OK 😏";
    }
});

// Click en SI
yesBtn.addEventListener("click", () => {
    // Ocultar botones
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // Mostrar mensaje
    message.textContent = "😏 ¿Ves lo fácil que era?";
    
    // Estilo para que se vea grande y centrado
    message.style.fontSize = "40px";
    message.style.position = "fixed";
    message.style.top = "50%";
    message.style.left = "50%";
    message.style.transform = "translate(-50%, -50%)";
}); */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let attempts = 0;

// Función para mover el botón NO
function moverBoton() {
    attempts++;

    // Movimiento por toda la pantalla
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    // NO se hace más pequeño
    let noSize = Math.max(10, 18 - attempts * 0.5);
    noBtn.style.fontSize = noSize + "px";

    // SI crece
    let yesSize = 18 + attempts * 3;
    yesBtn.style.fontSize = yesSize + "px";

    // SI se centra
    yesBtn.style.position = "fixed";
    yesBtn.style.left = "50%";
    yesBtn.style.top = "50%";
    yesBtn.style.transform = "translate(-50%, -50%)";

    // Después de muchos intentos
    if (attempts > 80) {
        noBtn.style.display = "none";
        yesBtn.style.fontSize = "60px";
        yesBtn.style.padding = "30px 50px";
        yesBtn.textContent = "OK 😏";
    }
}

// EVENTOS (PC + MÓVIL)
noBtn.addEventListener("mouseover", moverBoton);
noBtn.addEventListener("touchstart", moverBoton);

// CLICK EN SI (pantalla final)
yesBtn.addEventListener("click", () => {
    // Ocultar botones
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // Mostrar mensaje centrado
    message.textContent = "😏 ¿Ves lo fácil que era?";
    message.style.fontSize = "40px";
    message.style.position = "fixed";
    message.style.top = "50%";
    message.style.left = "50%";
    message.style.transform = "translate(-50%, -50%)";
});