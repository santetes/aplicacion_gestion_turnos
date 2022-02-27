const socket = io()

// Referencias HTML
const $cabecera_escritorio = document.querySelector('#cabecera-escritorio')
const $tickets_pendientes = document.querySelector('#lblPendientes')
const $inf_no_tickets = document.querySelector('#inf-no-tickets')
const $btn_atender = document.querySelector('#btn-atender')
const $atendiendo_a = document.querySelector('#atendiendo-a')

//Identificador número de escritório
$cabecera_escritorio.textContent = window.localStorage.getItem('escritorio')

//Comprobación si existen tickets pendientes nada mas conectar
socket.on('info-inicial', ({ restantes }) => {
    $tickets_pendientes.textContent = restantes
})

// información tickets pendientes
socket.on('server-comunica-nuevo-ticket', (numTickets) => {
    $tickets_pendientes.textContent = numTickets
})

// Atender nuevo ticket
$btn_atender.addEventListener('click', () => {
    const numEscritorio = localStorage.getItem('escritorio')
    socket.emit('atender-ticket', numEscritorio, (ticket_a_atender, cuantosQuedan) => {
        $tickets_pendientes.textContent = cuantosQuedan
        if (cuantosQuedan > 0) {
            $inf_no_tickets.classList.add('no-mostrar')
        } else {
            $inf_no_tickets.classList.remove('no-mostrar')
        }
        $atendiendo_a.textContent = ticket_a_atender.numero
    })

    // reproducir sonido
    let sonido = document.createElement('audio')
    sonido.setAttribute('src', './audio/new-ticket.mp3')
    sonido.setAttribute('autoplay', true)
    document.body.appendChild(sonido)
    setTimeout(() => {
        document.body.removeChild(sonido)
    }, 500)
})
