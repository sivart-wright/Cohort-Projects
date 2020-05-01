

let storeTextBox = document.getElementById("storeTextBox")
let addStoreButton = document.getElementById("addStoreButton")
let storeList = document.getElementById("storeList")
let filterDropDown = document.getElementById("filterDropDown")

let database = firebase.database() 

let rootRef = database.ref() 

rootRef.on('value', (snapshot) => {

    let snapshotValue = snapshot.val()

    mapItemsFunction(snapshotValue)

})

function mapItemsFunction(values) {
    let tasksArr = []
    let keyArr = []
    for(let key in values) {
        let task = values[key]
        tasksArr.push(task)
        keyArr.push(key)
    }

    let liItems = tasksArr.map((task, index) => {
        return `<li>${task.storeName}</li> <button class ="removeButton" 
        onclick="removeTask('${keyArr[index]}')">Remove</button>`
    })
    storeList.innerHTML = liItems.join("")

}

function removeTask(key){
    rootRef.child(key).remove()
}

addStoreButton.addEventListener("click",() => {
    let newStoreName = storeTextBox.value 
    rootRef.push({
        storeName: newStoreName
    })

})
