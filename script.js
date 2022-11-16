let budget = document.getElementById("budget");
let balances = document.getElementById("balances");
let expenses = document.getElementById("expenses");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let text = document.getElementById("text");
let amount = document.getElementById("amount");
let me = document.getElementById("me");
let sup = document.getElementById("sup");
let form = document.getElementById("form");
let notification = document.getElementById("notification");
let button1 = document.getElementById("button1");

let expense_value = document.querySelector(".expense.value");
let space1 = document.querySelectorAll(".space1");

let budgetTotal = 0;
let depenseTotal = 0;
let depenseList = [];
let balanceTotal = 0;

// input1.textContent =
function addToBudget(userBudget) {
  budgetTotal = userBudget;
  balanceTotal = budgetTotal - depenseTotal;
  budget.textContent = ` ${budgetTotal} CFA `;
  balances.textContent = `${balanceTotal} CFA `;
}
function addToExpense(userExpense) {
  depenseTotal += userExpense;
  balanceTotal = budgetTotal - depenseTotal;
  expenses.textContent = ` ${depenseTotal} CFA `;
  balances.textContent = `${balanceTotal} CFA `;
}

function substractToExpense(userExpense) {
  depenseTotal -= userExpense;
  balanceTotal = budgetTotal - depenseTotal;
  expenses.textContent = ` ${depenseTotal} CFA `;
  balances.textContent = `${balanceTotal} CFA `;
}

input1.addEventListener("change", function (e) {
  e.preventDefault();
  addToBudget(parseInt(e.target.value));
  input1.value = "";
});

function addExpense(input2, amount) {
  let depense = {
    title: input2,
    amount: amount,
  };
  depenseList.push(depense);
  depenseReader();
  form.reset();
}

function depenseReader() {
  let depenseHtml = document.getElementById("expense_liste");
  depenseHtml.innerHTML = "";
  for (let i = 0; i < depenseList.length; i++) {
    depenseHtml.innerHTML += `<div><p>Title: ${depenseList[i].title}</p>
    <p> Prices: ${depenseList[i].amount} </p>
    <button class="edit" onClick= "editUser('${i}')"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="delete" onClick= "deleteMe('${i}')"><i class="fa-solid fa-trash-can"></i></button>
    `;
  }
}

function deleteMe(i) {
  substractToExpense(depenseList[i].amount);
  depenseList.splice(i, 1);
  console.log(deleteMe(i));
  depenseReader();
}

function editUser(index) {
  substractToExpense(depenseList[index].amount);
  input2.value = depenseList[index].title;
  amount.value = depenseList[index].amount;
  depenseList.splice(index, 1);
  depenseReader();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let expenseTitle = input2.value;
  let expenseAmount = amount.value;
  addToExpense(parseInt(expenseAmount));
  addExpense(expenseTitle, expenseAmount);
});
