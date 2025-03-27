const form = document.querySelector('#form')
const btnS = document.querySelector('#btn_send')

const allNumbers = []

form.addEventListener('submit', addNumber)
btnS.addEventListener('click', analyse)

function addNumber(e){
    e.preventDefault()
    const number = parseInt(document.querySelector('#number').value)
    const numBox = document.querySelector('#numbers_box')

    if(number >=1 && number <=1000){
        if(allNumbers.includes(number)){
            alert('Valor já adicionado')
        }
        else{
            numBox.innerHTML += `<p>O número ${number} foi adicionado</p>`
            allNumbers.push(number)
        }
    }
    else{
        alert('Valor inválido')
    }
}

function analyse(){
    if(allNumbers.length >= 1){
        const txtBox = document.querySelector('#text_box')

        const total = allNumbers.length
        const maior = Math.max(...allNumbers)
        const menor = Math.min(...allNumbers)
        const soma = allNumbers.reduce(function(acumulador, item){
            acumulador += item
            return acumulador
        }, 0)
        const media = (soma/total).toFixed(2)

        txtBox.innerHTML = 
        `<p>Ao todo temos ${total} números cadastrados</p>
        <p>O maior valor informado foi ${maior}</p>
        <p>O menor valor informado foi ${menor}</p>
        <p>A soma dos valores cadastrados é ${soma}</p>
        <p>A média dos valores cadastrados é ${media}</p>`
    }
    else{
        alert('Não há números para analisar')
    }
}