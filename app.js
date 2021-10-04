const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelButton = document.querySelector('#btn-clear');
const addButton = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertInputControl = document.querySelector('ion-alert-controller');

let myTotalExpenses = 0;

const clear =() => {
    reasonInput.value = '';
    amountInput.value = '';
};

cancelButton.addEventListener('click', clear);

addButton.addEventListener('click', () => {
    console.log("Expense added!");
    const reasonEntered = reasonInput.value;
    const amountEntered = amountInput.value;
    


    if (reasonEntered.trim().length <= 0 || amountEntered <= 0 ||
        amountEntered.trim().length <= 0){
            alert("Please input reason and amount!")
           
            return;
        }    
        console.log(reasonEntered, amountEntered);

        const newExpenses = document.createElement('ion-item');
        expensesList.appendChild(newExpenses);

       
        myTotalExpenses += +amountEntered;
        
        totalExpensesOutput.textContent = myTotalExpenses;
        clear();
});
