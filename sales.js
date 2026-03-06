function loadSales(){

let sales = JSON.parse(localStorage.getItem("sales")) || []

let html=""

sales.forEach(s=>{

html += `
<hr>
${s.time}<br>
`

for(let item in s.cart){

html += `${item} × ${s.cart[item].count}<br>`

}

})

document.getElementById("sales").innerHTML = html

}

loadSales()
