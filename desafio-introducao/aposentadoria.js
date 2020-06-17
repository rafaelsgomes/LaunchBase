//DESAFIO 01 DO BOOTCAMP LAUNCHBASE 
//APOSENTADORIA

const name = 'Silvana'
const gender = 'F'
const age = 48
const contribution = 23

let message
const messageSucess = `${name}, você já pode se aposentar. Meus parabéns!`

if (gender == 'F' && (age + contribution) == 85) {
    message = messageSucess
} else if (gender == 'M' && (age + contribution) == 95) {
    message = messageSucess
} else {
    message = `${name}, você ainda não pode se aposentar!`
}
console.log(message)