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
socket.on('info-inicial', ({ cuatroUltimos }) => {
    $lblTicket1.textContent = cuatroUltimos.ticket_1.numero
    $lblEscritorio1.textContent = cuatroUltimos.ticket_1.escritorio
    $lblTicket2.textContent = cuatroUltimos.ticket_2.numero
    $lblEscritorio2.textContent = cuatroUltimos.ticket_2.escritorio
    $lblTicket3.textContent = cuatroUltimos.ticket_3.numero
    $lblEscritorio3.textContent = cuatroUltimos.ticket_3.escritorio
    $lblTicket4.textContent = cuatroUltimos.ticket_4.numero
    $lblEscritorio4.textContent = cuatroUltimos.ticket_4.escritorio
})
