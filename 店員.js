let cart = {};

const products = [
 {name:"レタス", price:257},
 {name:"トマト", price:300},
 {name:"きゅうり", price:120}
];

function loadProducts(){

const html = products.map(item => `
<button onclick="send('${item.name}',${item.price})">
${item.name}<br>
${item.price}円
</button>
`).join('');

document.getElementById("products").innerHTML = html;

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
html += `${key} × ${cart[key].count}<br>`
}

document.getElementById("cart").innerHTML=html

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

let sales = JSON.parse(localStorage.getItem("sales")) || []

sales.push({
time:new Date().toLocaleString(),
cart:cart
})

localStorage.setItem("sales",JSON.stringify(sales))

alert("会計完了")

cart={}
document.getElementById("cart").innerHTML=""
document.getElementById("total").textContent=0
document.getElementById("paid").value=""
document.getElementById("change").textContent=0

}

loadProducts()




