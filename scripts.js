const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectConverted = document.querySelector(".currency-select-converted")

const dolarValue = 6.2

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value-converted")

    //console.log(currencySelect.value)
    //console.log(currencySelectConverted.value)

    const dolarToday = 5.2
    const libraToday = 6.2
    const euroToday = 5.9
    const bitcoinToday = 300000.0


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue) //Altera o valor a ser convertido para o formato de moeda escolhida


    if (currencySelectConverted.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelectConverted.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelectConverted.value === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelectConverted.value === "btc") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelectConverted.value === "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img") 
    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./Assets/Dólar.png"
    }
    if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./Assets/Euro.png"
    }
    if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImg.src = "./Assets/Libra.png"
    }
    if (currencySelect.value === "btc") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./Assets/Bitcoin.png"
    }
    if (currencySelect.value === "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImg.src = "./Assets/Real.png"
    }

    convertValues()
}

function changeCurrencyConverted() {

    const currencyConvertedName = document.getElementById("currency-converted-name")
    const currencyImgConverted = document.querySelector(".currency-img-converted") 
    if (currencySelectConverted.value === "dolar") {
        currencyConvertedName.innerHTML = "Dólar Americano"
        currencyImgConverted.src = "./Assets/Dólar.png"
    }
    if (currencySelectConverted.value === "euro") {
        currencyConvertedName.innerHTML = "Euro"
        currencyImgConverted.src = "./Assets/Euro.png"
    }
    if (currencySelectConverted.value === "libra") {
        currencyConvertedName.innerHTML = "Libra Esterlina"
        currencyImgConverted.src = "./Assets/Libra.png"
    }
    if (currencySelectConverted.value === "btc") {
        currencyConvertedName.innerHTML = "Bitcoin"
        currencyImgConverted.src = "./Assets/Bitcoin.png"
    }
    if (currencySelectConverted.value === "real") {
        currencyConvertedName.innerHTML = "Real Brasileiro"
        currencyImgConverted.src = "./Assets/Real.png"
    }

    convertValues()
}

convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)
currencySelectConverted.addEventListener("change", changeCurrencyConverted)

