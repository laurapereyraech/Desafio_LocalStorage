// Obtener la referencia al elemento donde se mostrará el dato
const dataSpan = document.getElementById('data');

// Obtener el dato de localStorage
const storedData = localStorage.getItem('storedData');

// Mostrar el dato en el elemento
dataSpan.textContent = storedData ? storedData : 'No hay datos almacenados.';
