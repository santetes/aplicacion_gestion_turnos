const socket = io()

// Elementos HTML
const $generar_ticket = document.querySelector('#generar-ticket')
const $lbl_nuevoTicket = document.querySelector('#lblNuevoTicket')

$generar_ticket.addEventListener('click', () => {
    socket.emit('nuevo-ticket', null, (numero) => {
        $lbl_nuevoTicket.textContent = numero
    })
})
