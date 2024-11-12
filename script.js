// Datos iniciales para la API y elementos de la interfaz
let adviceData = { slip: { id: 0, advice: "Loading..." } };

const adviceIdElement = document.querySelector(".advice__id");
const adviceTextElement = document.querySelector(".advice__text");
const adviceButtonElement = document.querySelector(".advice__btn");

// Función para obtener consejo
async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    adviceData.slip = data.slip;
    updateUI(adviceData.slip);
  } catch (error) {
    console.error("Failed to fetch advice:", error);
    adviceTextElement.textContent = "An error occurred. Please try again.";
  }
}

// Función para actualizar la interfaz de usuario
function updateUI(slip) {
  adviceIdElement.textContent = `Advice #${slip.id}`;
  adviceTextElement.textContent = `"${slip.advice}"`;
}

// Eventos para cargar el consejo y actualizar al hacer clic
adviceButtonElement.addEventListener("click", getAdvice);
document.addEventListener("DOMContentLoaded", getAdvice);
