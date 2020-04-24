// You have been assigned to create a countdown timer application. 
// The user will enter the number of seconds in a textbox and press 
// the "Start Timer" button. This will start the timer. 
// Your app will display the timer counting down on the screen 
// in large visible font. 



let textBox = document.getElementById("textBox") 
let startButton = document.getElementById("startButton")
let counterHeading = document.getElementById("counterHeading")

startButton.addEventListener("click", function(){
    let value = textBox.value 

    
    let id = setInterval(function() {
        

        document.body.style.background = "green"
        counterHeading.innerHTML = value
        value = value - 1

        if(value < 0) {
            document.body.style.background = "red"
            clearInterval(id)

}
        }, 1000);
})