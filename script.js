const input = document.getElementById("guessInput")
const button = document.getElementById("guessBtn")
const message = document.getElementById("message")
const attemptsText = document.getElementById("attempts")
const resetBtn = document.getElementById("resetBtn")

let secretNumber = Math.floor(Math.random() * 100) + 1
let attempts = 0
let intentos = []

button.addEventListener("click", checkGuess)
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    checkGuess()
  }
})
resetBtn.addEventListener("click", resetGame)

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1
  attempts = 0
  input.value = ""
  message.innerText = ""
  attemptsText.innerText = attempts
}

function checkGuess() {
  const guess = Number(input.value)

  if (!guess || guess < 1 || guess > 100) {
    message.innerText = "Ingresa un número entre 1 y 100"
    return
  }
  intentos.push(guess)  
  attempts += 1
  attemptsText.innerText = attempts
  let mensaje;

  if(guess === secretNumber){
    mensaje = message.innerText = "¡Ganaste!"
    setTimeout(resetGame, 2000);
  }

  if(guess < secretNumber){
    mensaje = message.innerText = "El número es mayor"  
  }

  if (guess > secretNumber) {
    mensaje = message.innerText = "El número es menor"
  }
  return mensaje;
}