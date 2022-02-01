const path = require('path')
const fs = require('fs')

class TicketControl {
    constructor() {
        this.ultimo = 0
        this.hoy = new Date().getDate()
        this.tickets = []
        this.ultimos4 = []

        this.init()
    }

    get toJson() {
        return {
            ultimo: this.ultimo,
            hoy: this.hoy,
            tickets: this.tickets,
            ultimos4: this.ultimos4,
        }
    }

    guardarDb() {
        const archivo = path.join(__dirname, '../', 'db', 'data.json')
        fs.writeFileSync(archivo, JSON.stringify(this.toJson))
    }

    init() {
        //Reseteo de la base de datos diario:
        //Leemos archivo bbdd
        const { hoy, ultimo, tiquets, ultimos4 } = require('../db/data.json')
        //Comparamos si el día de hoy de la base de datos coincide con el hoy físico.
        //Si es así, almacenamos en los atributos de la instancia los valores de la bbdd
        //en caso contrario reseteamos la bbdd con los valores que carga el constructor por defecto
        if (hoy === this.hoy) {
            this.tickets = tiquets
            this.ultimo = ultimo
            this.ultimos4 = ultimos4
        } else {
            this.guardarDb()
        }
    }
}

module.exports = TicketControl
