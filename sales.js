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

html += `
合計：${s.total}円<br>
預り金：${s.payment}円<br>
お釣り：${s.change}円<br>
`
  
})

document.getElementById("sales").innerHTML = html

}

loadSales()

function clearSales(){
if(confirm("売上履歴を全削除しますか？")){
localStorage.removeItem("sales")
loadSales()
}
}
