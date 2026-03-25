const input = document.getElementById("guessInput")
const button = document.getElementById("guessBtn")
const message = document.getElementById("message")
const attemptsText = document.getElementById("attempts")
const resetBtn = document.getElementById("resetBtn")
const guessList = document.getElementById("guessList")
let secretNumber = Math.floor(Math.random() * 100) + 1
let attempts = 0
let intentos = []

button.addEventListener("click", () => {
  button.classList.add("clicked")

  setTimeout(() => {
    button.classList.remove("clicked")
  }, 150)

  checkGuess()
})

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
  message.classList.remove("win")
  document.body.classList.remove("won")

  attemptsText.innerText = attempts
  intentos = []
  if (guessList) guessList.innerText = ""
}

function checkGuess() {
if (attempts >= 10) {
  message.innerText = "¡Perdiste! El número era " + secretNumber
  message.classList.add("lose")

  setTimeout(resetGame, 2000)
  return
}

  if (intentos.includes(Number(input.value))) {
    message.innerText = "Ya intentaste ese número, prueba con otro"
    return
  }
  const guess = Number(input.value)

  if (!guess || guess < 1 || guess > 100) {
    message.innerText = "Ingresa un número entre 1 y 100"
    return
  }

  intentos.push(guess)  
  attempts += 1
  attemptsText.innerText = attempts
  let mensaje;

 if (guess === secretNumber) {
  message.innerText = "¡Ganaste!"
  message.classList.add("win")
  document.body.classList.add("won")
  setTimeout(resetGame, 2000)
}

  if(guess < secretNumber){
    mostrarMensaje("El número es mayor")  }

  if (guess > secretNumber) {
    mensaje = message.innerText = "El número es menor"
  }
  input.value = ""

  if (guessList) guessList.innerText = intentos.join(" ")
  guessList.innerText =  intentos.join(", ") 
  return mensaje;

}
function mostrarMensaje(texto) {
  message.classList.remove("show")

  setTimeout(() => {
    message.innerText = texto
    message.classList.add("show")
  }, 50)
}