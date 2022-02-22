
const  numero = document.querySelector('#resultado')

function insert(num) {
    numero.innerHTML += num    
}

function back() {
    const  numberResult = numero.textContent
    numero.innerHTML = numberResult.substring(0, numberResult.length -1 )
}

function clean() {
    numero.innerHTML = ''
}

function calcular() {
    let numberResult = numero.textContent
     result(numberResult = eval(numberResult))
}
function result(resultado) {
    numero.innerHTML = ''
    if(resultado) {
        numero.innerHTML = resultado
    } else {
       alert('Numero invalido')
    } 
}



