const Modal = {
    open(){
        //abrir modal
        //adicionar a class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close(){
        //fechar modal
        //remover classe active no modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const transaction = [
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
    expenses(){
        //somas as saidas
    },
    total() {
        //entradas - saidas
    }
}

//proximo passo
//Agora eu preciso substituir os dados do html com os dados do JS

const DOM = {
    innerHTMLTransaction() {
        const html = `
        <tr>
        <td class="description">Luz</td>
        <td class="expense">- R$ 500,00</td>
        <td class="date">23/01/2021</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover transação">
        </td>
    </tr>
    `   
    }
}

