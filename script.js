const swapButton = document.querySelector('.btn')
const currencyOne = document.querySelector('#currency-one')
const currencyTwo = document.querySelector('#currency-two')
const amountOne = document.querySelector('#amount-one')
const amountTwo = document.querySelector('#amount-two')
const rate = document.querySelector('.rate')

swapButton.addEventListener('click', function() {
    
    [currencyOne.value, currencyTwo.value] = [currencyTwo.value, currencyOne.value]
    calculate()
    
})

function calculate() {
    rate.innerHTML = this.value
    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne.value}`).then(res => res.json()).then(data => {
        rate.innerHTML = `1 ${currencyOne.value} = ${data.rates[currencyTwo.value]} ${currencyTwo.value}`
        amountTwo.value = (data.rates[currencyTwo.value] * amountOne.value).toFixed(2)
    })

    
}

currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)
amountTwo.addEventListener('input', calculate)


calculate()


const spoiler = document.querySelector('.btn-image')
const img = document.querySelector('.wrapper-image img')

let index = 0
document.querySelector('.btn-img').addEventListener('click', ()=> {
    index++
    if (index %2 === 0) document.querySelector('.wrapper img').style.display = 'none'
    else document.querySelector('.wrapper img').style.display = 'flex'
    
})

