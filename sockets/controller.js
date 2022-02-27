const { TicketControl } = require('../models/ticket-controller')

const ticketControl = new TicketControl()

const socketController = (socket) => {
    socket.on('disconnect', () => {})

    // Emite a la nueva conexión entrante info del último ticket, el numero de tickets restantes y los últimos 4 tickets para que cada pantalla correspondiente muestre la información actual al conectar
    socket.emit('info-inicial', {
        ultimo: ticketControl.ultimo,
        restantes: ticketControl.tickets.length,
        cuatroUltimos: ticketControl.infoCuatro,
    })

    socket.on('nuevo-ticket', (payload, callback) => {
        // Crea un nuevo ticket y almacena su número en último y guarda la bbdd
        const ultimo = ticketControl.siguiente()
        ticketControl.guardarDb()
        // Devuelve el número del último ticket
        callback(ultimo)

        socket.broadcast.emit('server-comunica-nuevo-ticket', ticketControl.tickets.length)
    })

    socket.on('atender-ticket', (numEscritorio, callback) => {
        const { ticket_a_atender, cuantosQuedan } = ticketControl.atenderTicket(numEscritorio)
        callback(ticket_a_atender, cuantosQuedan)

        socket.broadcast.emit('server-comunica-nuevo-ticket', ticketControl.tickets.length)

        socket.broadcast.emit('actualiza-publico', {
            ultimo: ticketControl.ultimo,
            restantes: ticketControl.tickets.length,
            cuatroUltimos: ticketControl.infoCuatro,
        })
    })
}

module.exports = socketController
