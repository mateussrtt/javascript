const axios = require('axios')

const API_URL = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'
const CHECK_INTERVAL = 300000
const USD_THRESHOLD = 5.90

async function checkExchangeRates() {
    try {
        const response = await axios.get(API_URL)
        const data = response.data

        const usdToBrl = parseFloat(data.USDBRL.bid)
        const eurToBrl = parseFloat(data.EURBRL.bid)
        const btcToBrl = parseFloat(data.BTCBRL.bid)

        console.log(`Cotação Atual (BRL):`);
        console.log(`Dólar (USD): R$ ${usdToBrl.toFixed(2)}`)
        console.log(`Euro (EUR): R$ ${eurToBrl.toFixed(2)}`)
        console.log(`Bitcoin (BTC): R$ ${btcToBrl.toFixed(2)}`)

        if (usdToBrl > USD_THRESHOLD) {
            console.log(`Atenção: O dólar está acima de R$ ${USD_THRESHOLD.toFixed(2)}!`)
        } else {
            console.log(`O dólar está abaixo de R$ ${USD_THRESHOLD.toFixed(2)}.`)
        }
    } catch (error) {
        console.error('Erro ao obter as cotações:', error.message)
    }
}

setInterval(checkExchangeRates, CHECK_INTERVAL)

checkExchangeRates()