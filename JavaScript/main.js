let data={
    id:[
        {firstName:prompt("Enter Your First Name"),lastName:prompt("Enter Your Last Name"),age:Number(prompt("Enter Your Age"))},
        {firstName:prompt("Enter Your First Name"),lastName:prompt("Enter Your Last Name"),age:Number(prompt("Enter Your Age"))},
        {firstName:prompt("Enter Your First Name"),lastName:prompt("Enter Your Last Name"),age:Number(prompt("Enter Your Age"))}
    ]
}
let html=""
data.id.forEach((elem)=>{
    html+=`<div class="user">
    <h4>First Name:${elem.firstName}</h4>
    <h4>Last Name:${elem.lastName}</h4>
    <h4>Age:${elem.age}</h4>
    </div>`
})
document.getElementById("root").innerHTML=html
