const socket = io()

// Elementos HTML
const $generar_ticket = document.querySelector('#generar-ticket')
const $lbl_nuevoTicket = document.querySelector('#lblNuevoTicket')

socket.on('info-conexion-inicial', ({ ultimo }) => {
    $lbl_nuevoTicket.textContent = ultimo
})

$generar_ticket.addEventListener('click', () => {
    socket.emit('nuevo-ticket', null, (numero) => {
        $lbl_nuevoTicket.textContent = numero
    })
})
