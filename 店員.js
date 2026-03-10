let cart = {};

function loadProducts(){

let products = JSON.parse(localStorage.getItem("products")) || []

const html = products.map(item => `
<button class="product-btn ${item.type}" onclick="send('${item.name}',${item.price})">
${item.name}<br>
${item.price}円
</button>
`).join('');

document.getElementById("products").innerHTML = html

}
function send(name,price){

if(cart[name]){
cart[name].count++
}else{
cart[name]={count:1,price:price}
}

updateCart()
updateTotal()

}

function updateCart(){

let html=""

for(let key in cart){
html += `
${key} × ${cart[key].count}
<button onclick="removeItem('${key}')">－</button>
<br>
`
}

document.getElementById("cart").innerHTML=html

}

function removeItem(name){

if(cart[name]){
cart[name].count--

if(cart[name].count <= 0){
delete cart[name]
}

}

updateCart()
updateTotal()

}

function updateTotal(){

let total=0

for(let key in cart){
total += cart[key].count * cart[key].price
}

document.getElementById("total").textContent=total

calcChange()

}

function calcChange(){

let total = Number(document.getElementById("total").textContent)
let paid = Number(document.getElementById("paid").value) || 0

let change = paid - total

document.getElementById("change").textContent = change > 0 ? change : 0

}
function confirmPurchase(){

let sale = {
  time: new Date().toLocaleString(),
  cart: cart,
  total: total,
  payment: payment,
  change: change
};

localStorage.setItem("sales",JSON.stringify(sales))

alert("会計完了")

cart={}
document.getElementById("cart").innerHTML=""
document.getElementById("total").textContent=0
document.getElementById("paid").value=""
document.getElementById("change").textContent=0

}

loadProducts()











