//DESAFIO 01 DO BOOTCAMP LAUNCHBASE 
//IMC
const name = 'Carlos'
const heavy = 84
const stature = 1.88

const imc = heavy / (stature ** 2)

if (imc >= 30) {
    console.log(`${name} você está acima do peso com o IMC em ${imc}`)
} else {
    console.log(`${name} você não está acima do peso com o IMC em ${imc}`)
}