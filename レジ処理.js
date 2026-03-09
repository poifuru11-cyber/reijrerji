

// ここが重要

function saveSale(data){

let sales = JSON.parse(localStorage.getItem("sales")) || [];

sales.push(date);

localStorage.setItem("sales", JSON.stringify(sales));

}

function checkout(){

let total = Number(document.getElementById("total").textContent);
let payment = Number(document.getElementById("payment").value);
let change = payment - total;

let sale = {
  time: new Date().toLocaleString(),
  cart: cart,
  total: total,
  payment: payment,
  change: change
};

saveSale(sale);

alert("会計完了");

}


