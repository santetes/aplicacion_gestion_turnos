const express = require('express')
const cors = require('cors')
const socketController = require('../sockets/controller')
require('colors')

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT

        //Esta expresión prepara el servido como socketWeb mediante socket.io
        this.server = require('http').createServer(this.app)
        this.io = require('socket.io')(this.server)

        //Middlewares
        this.middlewares()

        //Rutas de mi aplicación
        this.routes()

        //Sockets
        this.sockets()
    }

    middlewares() {
        //Cors
        this.app.use(cors())

        //Direcctorio Público
        this.app.use(express.static('public'))
    }

    routes() {
        // this.app.use('/api/auth', require('../routes/user.auth.routes'))
    }

    sockets() {
        this.io.on('connection', socketController)
    }

    listen() {
        this.server.listen(this.port, () =>
            console.log(`A la escucha en el puerto ${this.port}`.magenta)
        )
    }
}

module.exports = Server
