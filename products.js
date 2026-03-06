function loadProducts(){

let products = JSON.parse(localStorage.getItem("products")) || []

let html=""

products.forEach(p=>{
html += `${p.name} ${p.price}円<br>`
})

document.getElementById("list").innerHTML = html

}

function addProduct(){

let name = document.getElementById("name").value
let price = Number(document.getElementById("price").value)

let products = JSON.parse(localStorage.getItem("products")) || []

products.push({name,price})

localStorage.setItem("products",JSON.stringify(products))

document.getElementById("name").value=""
document.getElementById("price").value=""

loadProducts()

}

loadProducts()
