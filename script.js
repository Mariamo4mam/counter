let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0 

console.log(saveEl)

function increment () {
    count += 1
    countEl.textContent = count
}
 function save () {
    let countStr = count + " _ "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
 }




 let greetingParagraph = document.getElementById("greeting")
 console.log(greetingParagraph)
function greeting (){
    console.log("buttonClicked")
    greetingParagraph.textContent = "Hiya! Its me MARIAM ☺"
}

 
