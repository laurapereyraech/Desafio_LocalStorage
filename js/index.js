// Obtener referencias a los elementos del DOM
const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');

// Añadadir un event listener al botón para guardar el dato en localStorage
buttonText.addEventListener('click', () => {
    // Obtener  el valor del input
    const textValue = inputText.value;

    // Guardar el valor en localStorage
    localStorage.setItem('storedData', textValue);

    // Limpiar el input después de guardar el dato
    inputText.value = '';
});
