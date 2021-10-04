const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const manyInput = document.querySelector('#input-many');
const weekInput = document.querySelector('#input-week');
const cancelButton = document.querySelector('#btn-clear');
const addButton = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertInputControl = document.querySelector('ion-alert-controller');

let myTotalExpenses = 0;

const clear =() => {
    reasonInput.value = '';
    amountInput.value = '';
    manyInput.value = '';
    weekInput.value = '';
};

cancelButton.addEventListener('click', clear);

addButton.addEventListener('click', () => {
    console.log("Expense added!");
    const weekEntered = weekInput.value;
    const reasonEntered = reasonInput.value;
    const amountEntered = amountInput.value;
    const manyEntered = manyInput.value;
    


    if (reasonEntered.trim().length <= 0 || amountEntered <= 0 ||
        amountEntered.trim().length <= 0 || manyEntered.trim().length <= 0  
        || manyEntered <= 0 || weekEntered <=0){
            alert("You have no input value")
           
            return;
        }    
        
        console.log(weekEntered, reasonEntered, amountEntered, manyEntered);
        const newExpenses = document.createElement('ion-item');
        expensesList.appendChild(newExpenses);
        


        newExpenses.textContent = weekEntered + ': ' + reasonEntered + ' = P' + amountEntered*manyEntered;
        myTotalExpenses += +(manyEntered*amountEntered);
        
        totalExpensesOutput.textContent = myTotalExpenses;
        clear();
});
