const incBtn = document.querySelector("#inc")
const decBtn = document.querySelector("#dec")
const resetBtn = document.querySelector("#reset")
const runBtn = document.querySelector("#run")
const stopBtn = document.querySelector("#stop")
const progressBar = document.querySelector(".progress-bar")
const progressNumber = document.querySelector(".progress-number")
const spinner = document.querySelector(".spinner")

let currentNumber = 0
let currentProgress = 0
let interval = ''

const increment = () => {
   if(currentNumber < 100 ) {
      spinner.classList.remove("complete-spin")
      currentNumber += 10
      progressNumber.innerText = currentNumber + "%"
   }
}
const decrement = () => {
   if(currentNumber != 0 ) {
      spinner.classList.remove("complete-spin")
      currentNumber -= 10
      progressNumber. innerText = currentNumber + "%"
      if(currentProgress > currentNumber) {
         progressBar.style.width = `${0}%`
         currentProgress = 0
      }
   }
}
const reset = () => {
   currentNumber = 0
   currentProgress = 0
   progressNumber.innerText = currentNumber + "%"
   progressBar.style.width = `${currentProgress}%`
   spinner.classList.remove("complete-spin")
}

const run = () => {
   if(currentProgress != currentNumber){
      spinner.classList.add("spin")
      interval = setInterval(() => {
         if(currentProgress == currentNumber){
            clearInterval(interval)
            spinner.classList.remove("spin")
            currentProgress == 100 && spinner.classList.add("complete-spin")
         } else {
            currentProgress += 1
            progressBar.style.width = `${currentProgress}%`
         }
         
      }, 50)
   }
   
}
const stop = () => {
   spinner.classList.remove("spin")
   clearInterval(interval)
}

incBtn.addEventListener("click", increment)
decBtn.addEventListener("click", decrement)
resetBtn.addEventListener("click", reset)
runBtn.addEventListener("click", run)
stopBtn.addEventListener("click", stop)
