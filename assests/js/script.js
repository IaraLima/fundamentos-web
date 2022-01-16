let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')


nome.style.width = '80%'
email.style.width = '80%'
assunto.style.width = '80%'

function validaNome(){
    let alertNome = document.querySelector('#alertNome')
    if (nome.value.length < 3) {
        alertNome.innerHTML = 'Nome inválido'
        alertNome.style.color = 'red'
    }else {
        alertNome.innerHTML = 'Nome válido'
        alertNome.style.color = 'green'
    }
}

function validaEmail (){
    let txtEmail = document.querySelector('#alertEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
    }
}