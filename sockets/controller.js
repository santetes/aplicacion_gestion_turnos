const { TicketControl } = require('../models/ticket-controller')

const ticketControl = new TicketControl()

const socketController = (socket) => {
    socket.on('disconnect', () => {})

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

        socket.broadcast.emit('actualiza-publico', ticketControl.ultimos4)
    })
}

module.exports = socketController
