
//HTML CONNECT
let orderList = document.getElementById("orderList")
let userEmail = document.getElementById("userEmail")
let userEmail2 = document.getElementById("userEmail2")
let userOrder = document.getElementById("userOrder")
let enterButton = document.getElementById("enterButton")
let deleteButton = document.getElementById("deleteButton")
let submission = document.getElementById("submission")

//API CALL
let request = new XMLHttpRequest()
request.open("GET", "https://dc-coffeerun.herokuapp.com/api/coffeeorders/")
request.send()

//PRINT API DATA
request.onload = function(result) {
    console.log(this)
    let coffeeItems = Object.values(JSON.parse(this.responseText))
    let coffeeVar = coffeeItems.map(info => {
        return `<li>
                    <label>${info.emailAddress}</label>
                    <label>${info.coffee}</label>
                </li>`
    })
    orderList.innerHTML = coffeeVar.join("")
}

//POST BUTTON
enterButton.addEventListener("click", function() {
    let email = userEmail.value
    let order = userOrder.value
    let user = {
        emailAddress: email, 
        coffee: order
    }
    console.log(user)
    console.log("order submitted")
    let postRequest = new XMLHttpRequest()
    postRequest.open("POST", "https://dc-coffeerun.herokuapp.com/api/coffeeorders/")
    postRequest.setRequestHeader("Content-type", "application/json")
    postRequest.send(JSON.stringify(user))
    postRequest.onload = function() {
        let newCoffee = JSON.parse(this.responseText)
        orderList.innerHTML += 
                `<li>
                    <label>${newCoffee.emailAddress}</label>
                    <label>${newCoffee.coffee}</label>
                </li>`
    }

})

//DELETE BUTTON
deleteButton.addEventListener("click", function() {
    let deleteRequest = new XMLHttpRequest()
    deleteRequest.onload = function() {
        console.log(this.responseText)
    }
    deleteRequest.open("DELETE",`https://dc-coffeerun.herokuapp.com/api/coffeeorders/${userEmail2.value}`)   
    deleteRequest.setRequestHeader("Content-Type","application/json")
    deleteRequest.send()

    })
