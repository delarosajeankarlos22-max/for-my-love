let currentPin = "";
const CORRECT_PIN = "1234"; // Define aquí tu clave especial (ej. fecha de aniversario)

function pressKey(num) {
  if (currentPin.length < 4) {
    currentPin += num;
    updateDots();
  }
}

function clearPin() {
  currentPin = "";
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index < currentPin.length) {
      dot.classList.add('filled');
    } else {
      dot.classList.remove('filled');
    }
  });
}

function checkPin() {
  if (currentPin === CORRECT_PIN) {
    document.getElementById('lockscreen').classList.add('hidden');
    document.getElementById('content').classList.remove('hidden');
  } else {
    alert("PIN incorrecto ❤️ Inténtalo de nuevo");
    clearPin();
  }
}
