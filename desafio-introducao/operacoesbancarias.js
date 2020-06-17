//DESAFIO 05 DO BOOTCAMP LAUNCHBASE 
//OPERAÇÕES BANCARIAS (BOOLEAN e PADRONIZAÇÃO)

const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

function createTransaction(transaction){
    user.transactions.push(transaction)

    if(transaction.type == 'credit'){
        user.balance += transaction.value
    } else{
        user.balance -= transaction.value
    }

}

function getHigherTransactionByType(type){
    let higherTransaction
    let higherValue = 0

    for (transaction of user.transactions){
        if (transaction.type == type && higherValue < transaction.value) {
            higherTransaction = transaction
            higherValue = transaction.value

        }
    }

    return higherTransaction
}

function getAverageTransactionValue(){
    let sum = 0 

    for ( transaction of user.transactions){
        sum += transaction.value
    }

    return sum / user.transactions.length
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0,
    }
    for (let transaction of user.transactions) {
        if (transaction.type === 'credit')
            count.credit++
        else
            count.debit++
    }

    return count
}

createTransaction({type: 'credit', value: 50.5})
createTransaction({type: 'debit', value: 10.5})

console.log(user.balance)
console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))
console.log(getAverageTransactionValue())
console.log(getTransactionsCount())