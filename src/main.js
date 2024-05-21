const form = document.querySelector('#form')
const btnS = document.querySelector('#btn_send')

const allNumbers = []

form.addEventListener('submit', addNumber)
btnS.addEventListener('click', analyse)

function addNumber(e){
    e.preventDefault()
    addDisplay()
    addArray()
}

function addDisplay(){
    const number = parseInt(document.querySelector('#number').value)
    const numBox = document.querySelector('#numbers_box')

    if(number >=1 && number <=100){
        numBox.innerHTML += `<p>O número ${number} foi adicionado</p>`
    }
    else{
        alert('Valor inválido')
    }
}

function addArray(){
    const number = parseInt(document.querySelector('#number').value)

    if(number >=1 && number <=100){
        allNumbers.push(number)
    }
}

function analyse(){
    const txtBox = document.querySelector('#text_box')

    const total = allNumbers.length
    const maior = Math.max(...allNumbers)
    const menor = Math.min(...allNumbers)
    const soma = allNumbers.reduce(function(acumulador, item){
        acumulador += item
        return acumulador
    }, 0)
    const media = soma/total

    txtBox.innerHTML = 
    `<p>Ao todo temos ${total} números cadastrados</p>
    <p>O maior valor informado foi ${maior}</p>
    <p>O menor valor informado foi ${menor}</p>
    <p>A soma dos valores cadastrados é ${soma}</p>
    <p>A média dos valores cadastrados é ${media}</p>`
}