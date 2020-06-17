//DESAFIO 04 DO BOOTCAMP LAUNCHBASE 
//DESPESAS (FUNÇÕES, MÉTODOS, ESTRUTURA DE REPETIÇÃO E ESCOPO)

const users = [
    {
        name: 'Salvio',
        income: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },
    {
        name: 'Marcio',
        income: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },
    {
        name: 'Lucia',
        income: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
]

function calcBalance(income, expenses) {
    const calcIncome = calcNumber(income)
    const calcExpenses = calcNumber(expenses)

    return calcIncome - calcExpenses
}

function calcNumber(numbers) {
    let calculated = 0

    for (number of numbers) {
        calculated += number
    }
    return calculated
}

for (i = 0; i < users.length; i++) {
    const balance = calcBalance(users[i].income, users[i].expenses)

    if (balance < 0) {
        console.log(`O usuario ${users[i].name} possui saldo NEGATIVO de ${balance.toFixed(2)}`)
    } else {
        console.log(`O usuario ${users[i].name} possui saldo POSITIVO de ${balance.toFixed(2)}`)
    }
}