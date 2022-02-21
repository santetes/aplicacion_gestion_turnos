const socket = io()

// Referencias del HTML
const $led_estado = document.querySelector('#led-estado')
const $btn_escritorio = document.querySelector('#btn-escritorio')
const $arrayChecks = document.querySelectorAll('.form-check-input')
const $lbl_aviso_escritorio = document.querySelector('#lbl-aviso-escritorio')

socket.on('connect', () => {
    $led_estado.classList.toggle('conectado')
    $led_estado.classList.toggle('desconectado')
})

socket.on('disconnect', () => {
    $led_estado.classList.toggle('conectado')
    $led_estado.classList.toggle('desconectado')
})

socket.on('enviar-mensaje', (payload) => {
    console.log(payload)
})

$btn_escritorio.addEventListener('click', () => {
    let num_escritorio = null
    for (let check of $arrayChecks) {
        if (check.checked) {
            num_escritorio = check.value
        }
    }
    if (!num_escritorio) {
        $lbl_aviso_escritorio.classList.add('mostrar')
        $lbl_aviso_escritorio.classList.remove('no-mostrar')
    } else {
        $lbl_aviso_escritorio.classList.add('no-mostrar')
        $lbl_aviso_escritorio.classList.remove('mostrar')

        window.localStorage.setItem('escritorio', num_escritorio)

        //TODO: Implementar funcionamiento desde Heroku

        location.assign('http://localhost:8080/escritorio.html')
    }
})
