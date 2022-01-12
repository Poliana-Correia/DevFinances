const Modal = {
    open() {
        //abrir modal
        //adicionar a class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close() {
        //fechar modal
        //remover classe active no modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    },
]

//Organizando as ideias
//eu preciso somas as entradas
//depois preciso somar as saidas
// remover das entradas o valor das saidas
//assim, eu terei o total

const Transaction = {
    incomes() {
        //somar as entradas
    },
    expenses() {
        //somas as saidas
    },
    total() {
        //entradas - saidas
    }
}

//proximo passo
//Agora eu preciso substituir os dados do html com os dados do JS

const DOM = {
    transactionsContainer: document.querySelector('#data-table 
    tbody')
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        
    },
    innerHTMLTransaction(transaction) {
        const html = `
        <td class="description">${transaction.description}</td>
        <td class="expense">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover transação">
        </td>
        `

        return html
    }
}

DOM.addTransaction(transactions[0])

