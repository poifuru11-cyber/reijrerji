function loadSales(){
let sales = JSON.parse(localStorage.getItem("sales")) || []
let html=""
sales.forEach(s=>{
html += `<hr><input type="checkbox" class="sel" value="${sales.indexOf(s)}"> `
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
function clearSales(){
if(confirm("売上履歴を全削除しますか？")){
localStorage.removeItem("sales")
loadSales()
}
}
loadSales()


function deleteSelected(){
let sales = JSON.parse(localStorage.getItem("sales")) || []
const checked = [...document.querySelectorAll(".sel:checked")].map(e=>Number(e.value))
const newSales = sales.filter((_,i)=> !checked.includes(i))
localStorage.setItem("sales", JSON.stringify(newSales))
loadSales()
}
