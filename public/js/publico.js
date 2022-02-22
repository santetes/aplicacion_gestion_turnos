const socket = io()

// Elementos HTML
const $lblTicket1 = document.querySelector('#lblTicket1')
const $lblEscritorio1 = document.querySelector('#lblEscritorio1')
const $lblTicket2 = document.querySelector('#lblTicket2')
const $lblEscritorio2 = document.querySelector('#lblEscritorio2')
const $lblTicket3 = document.querySelector('#lblTicket3')
const $lblEscritorio3 = document.querySelector('#lblEscritorio3')
const $lblTicket4 = document.querySelector('#lblTicket4')
const $lblEscritorio4 = document.querySelector('#lblEscritorio4')

//Evento a la escucha del servidor
socket.on('actualiza-publico', (arrayUltimos4) => {
    console.log('llega aquí')
    $lblTicket1.textContent = arrayUltimos4[3].numero
    $lblEscritorio1.textContent = arrayUltimos4[3].escritorio
    $lblTicket2.textContent = arrayUltimos4[2].numero
    $lblEscritorio2.textContent = arrayUltimos4[2].escritorio
    $lblTicket3.textContent = arrayUltimos4[1].numero
    $lblEscritorio3.textContent = arrayUltimos4[1].escritorio
    $lblTicket4.textContent = arrayUltimos4[0].numero
    $lblEscritorio4.textContent = arrayUltimos4[0].escritorio
})
