

// ここが重要

function saveSale(data){

let sales = JSON.parse(localStorage.getItem("sales")) || [];

sales.push(data);

localStorage.setItem("sales", JSON.stringify(sales));

}

function checkout(){

let total = document.getElementById("total").textContent;

let sale = {
  time: new Date().toLocaleString(),
  total: total
};

saveSale(sale);

alert("会計完了");

}