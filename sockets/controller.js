const TicketControl = require('../models/ticket-controller')

const ticketControl = new TicketControl()

const socketController = (socket) => {
    socket.on('disconnect', () => {})

    socket.on('mensaje', (payload, callback) => {
        // Respuesta al socket que ha generado el evento
        // socket.emit('respuesta', payload.mensaje)
        //Respuesta a todos los sockets
        // this.io.emit('respuesta', 'mensaje de difusión')
        //Esto anterior no funcionaria porque no tengo acceso desde aquí a la instancia de io. Es por ello que utilizamos la siguiente instrucción para enviar un mensaje a todo socket conectado menos al que emitio el evento

        socket.broadcast.emit('respuesta', payload)

        //Utilizando un callback como segundo argumento, podemos retornar un respuesta al socket que realizó la operación.

        console.log('almaceno la información en la bbdd y respondo al cliente que todo Ok', payload)
        callback('todo ok')
    })
}

module.exports = socketController
