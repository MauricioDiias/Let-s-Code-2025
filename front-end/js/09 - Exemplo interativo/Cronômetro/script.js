// selecionou os elementos
const displayMinuts = document.getElementById("minuts");
const displaySeconds = document.getElementById("seconds");
const displayMiliSeconds = document.getElementById("miliseconds");
const listRound = document.getElementById("list");

// controles
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");

const roundButton = document.getElementById("round");

// roundButton.classList = "off";

let minuts = 0;
let seconds = 0;
let mili = 0;
let timer;

function startTimer() {
  timer = setInterval(() => {
    if (mili === 99) {
      mili = 0;
      seconds++;
    }
    if (seconds === 59) {
      seconds = 0;
      minuts++;
    }

    mili += 1;
    displayMinuts.textContent = minuts;
    displaySeconds.textContent = seconds;
    displayMiliSeconds.textContent = mili;
    // console.log(`${minuts} : ${seconds} : ${mili} `);
  }, 10);
}

startButton.addEventListener("click", () => {
  startTimer();
  // roundButton.style.display = "inline";
});

stopButton.addEventListener("click", () => {
  clearInterval(timer);
  // roundButton.style.display = "none";
});

resetButton.addEventListener("click", () => {
  minuts = 0;
  seconds = 0;
  mili = 0;

  displayMinuts.textContent = minuts;
  displaySeconds.textContent = seconds;
  displayMiliSeconds.textContent = mili;

  listRound.innerHTML = "";
});

roundButton.addEventListener("click", () => {
  if (!minuts && !seconds && !mili) {
    return;
  }

  listRound.innerHTML += `<li> = ${minuts} : ${seconds} : ${mili}</li>`;
});

// exemplo

// let filho = `<h1>Cronômetro</h1>`;

// for (let i = 0; i < 9; i++) {
//   filho += `<h1>Cronômetro</h1>`;
// }

// document.getElementById("ex").innerHTML += filho;

// document.querySelectorAll("h1").forEach((item) => (item.classList = "upgrade"));
