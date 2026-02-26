const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectConverted = document.querySelector(".currency-select-converted")
const currencyName = document.getElementById("currency-name")
const currencyImg = document.querySelector(".currency-img")
const currencyConvertedName = document.getElementById("currency-converted-name")
const currencyImgConverted = document.querySelector(".currency-img-converted")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")
const inputCurrencyValue = document.querySelector(".input-currency") 
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
const currencyValueConverted = document.querySelector(".currency-value-converted")
const dolarValue = 6.2
const dolarToday = 5.2
const libraToday = 6.2
const euroToday = 5.9
const bitcoinToday = 300000.0

function convertValues() {


    //Sequência de conversões de  Real para as outras moedas, utilizando o valor do Real dividido pelo valor da moeda escolhida para conversão, e formatando o resultado para o formato de moeda escolhido
    if (currencySelect.value === "real") {

        console.log("Moeda a ser convertida: Real")

        if (currencySelectConverted.value === "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue.value / dolarToday)
            console.log("Moeda convertida: Dólar Americano")
            
        }

        if (currencySelectConverted.value === "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue.value / euroToday)
            console.log("Moeda convertida: Euro")
        }

        if (currencySelectConverted.value === "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue.value / libraToday)
            console.log("Moeda convertida: Libra Esterlina")
        }

        if (currencySelectConverted.value === "btc") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue.value / bitcoinToday)
            console.log("Moeda convertida: Bitcoin")
        }

        if (currencySelectConverted.value === "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue.value)
            console.log("Moeda convertida: Real Brasileiro")
        }
    }
}

function changeCurrency() {

    
    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./Assets/Dólar.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue.value)
       
    }
    if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./Assets/Euro.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue.value)
    }

    if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImg.src = "./Assets/Libra.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue.value)
    }

    if (currencySelect.value === "btc") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./Assets/Bitcoin.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue.value)
    }

    if (currencySelect.value === "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImg.src = "./Assets/Real.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue.value)
    }

    
    convertValues()
}

function changeCurrencyConverted() {


    if (currencySelectConverted.value === "dolar") {
        currencyConvertedName.innerHTML = "Dólar Americano"
        currencyImgConverted.src = "./Assets/Dólar.png"
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(0.00)
    }

    if (currencySelectConverted.value === "euro") {
        currencyConvertedName.innerHTML = "Euro"
        currencyImgConverted.src = "./Assets/Euro.png"
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(0.00)
    }

    if (currencySelectConverted.value === "libra") {
        currencyConvertedName.innerHTML = "Libra Esterlina"
        currencyImgConverted.src = "./Assets/Libra.png"
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(0.00)
    }

    if (currencySelectConverted.value === "btc") {
        currencyConvertedName.innerHTML = "Bitcoin"
        currencyImgConverted.src = "./Assets/Bitcoin.png"
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(0.00)
    }

    if (currencySelectConverted.value === "real") {
        currencyConvertedName.innerHTML = "Real Brasileiro"
        currencyImgConverted.src = "./Assets/Real.png"
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(0.00)
    }
    
    convertValues()
}

convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)
currencySelectConverted.addEventListener("change", changeCurrencyConverted)
inputCurrencyValue.addEventListener("input", changeCurrency)
