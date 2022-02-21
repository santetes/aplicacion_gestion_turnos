// Referencias HTML
const $cabecera_escritorio = document.querySelector('#cabecera-escritorio')
$cabecera_escritorio.textContent = window.localStorage.getItem('escritorio')
