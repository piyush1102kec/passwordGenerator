const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("password-one")
let passwordTwoEl = document.getElementById("password-two")
let generateEl = document.getElementById("generate-btn")

let passwordLength = 15

function getRandomChar(){
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword(){
    let randomPassword = ""
    for(i =0; i < passwordLength; i++){
        randomPassword += getRandomChar() 

    }
    return randomPassword
}
generateEl.addEventListener("click", function(){
    passwordOneEl.textContent = generateRandomPassword()
    passwordTwoEl.textContent = generateRandomPassword()
})