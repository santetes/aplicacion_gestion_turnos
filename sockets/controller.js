const { TicketControl } = require('../models/ticket-controller')

const ticketControl = new TicketControl()

const socketController = (socket) => {
    socket.on('disconnect', () => {})

    socket.on('nuevo-ticket', (payload, callback) => {
        const ultimo = ticketControl.siguiente()
        ticketControl.guardarDb()
        callback(ultimo)
    })
}

module.exports = socketController
