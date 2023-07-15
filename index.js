const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
//grab password 1 label element --- CORRECT
let passwordOneEl = document.getElementById("pw1")
//grab password 2 label element --- CORRECT
let passwordTwoEl = document.getElementById("pw2")

//set password length --- CORRECT
let passwordLength = 15
//function to return a random character --- CORRECT
function getChar() {
    let randomCharacter = Math.floor( Math.random() * characters.length)
    return characters[randomCharacter]
}


//function to generate a random password using getChar() --- CORRECT
function getRandomPassword() {
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        password += getChar()   
    } 
    return password
}

let newRandomPassword = getRandomPassword()


//function for "Generate Passwords"" button --- CORRECT
function generatePasswords() {
    passwordOneEl.textContent = getRandomPassword()
    passwordTwoEl.textContent = getRandomPassword()
}