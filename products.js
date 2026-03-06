function loadProducts(){

let products = JSON.parse(localStorage.getItem("products")) || []

let html=""

products.forEach((p,index)=>{
html += `
${p.name} ${p.price}円 
<button onclick="deleteProduct(${index})">削除</button>
<br>
`
})

document.getElementById("list").innerHTML = html

}

function deleteProduct(index){

let products = JSON.parse(localStorage.getItem("products")) || []

products.splice(index,1)

localStorage.setItem("products",JSON.stringify(products))

loadProducts()

}

function addProduct(){

let name = document.getElementById("name").value
let price = Number(document.getElementById("price").value)
let type = document.getElementById("type").value

let products = JSON.parse(localStorage.getItem("products")) || []

products.push({name,price,type})

localStorage.setItem("products",JSON.stringify(products))

loadProducts()

}

loadProducts()
