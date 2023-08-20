const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");

let play = false;

let newWords = "";
let ranWords = "";

let sWords = [
  "python",
  "javascript",
  "c++",
  "php",
  "java",
  "c#",
  "html",
  "css",
  "reactjs",
  "angular",
  "swift",
  "android",
  "sql",
];

const createNewWords = () => {
  let ranNum = Math.floor(Math.random() * sWords.length);
  let newTempSwords = sWords[ranNum];
  return newTempSwords;
};

const scrambleWords = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    let j = Math.floor(Math.random() * (i + 1));

    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
  }
};

btn.addEventListener("click", () => {
  if (!play) {
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle("hidden");
    newWords = createNewWords();
    ranWords = scrambleWords(newWords.split("")).join("");
    msg.innerHTML = `Guess the Word: ${ranWords}`;
    guess.value = "";
  } else {
    let tempWord = guess.value;
    if (tempWord === newWords) {
      play = false;
      msg.innerHTML = `Awesome It's Correct. it is ${newWords}`;
      btn.innerHTML = "START AGAIN";
      guess.classList.toggle("hidden");
    } else {
      msg.innerHTML = `Soory Boss. Its not Correct. plz try again ${ranWords}`;
    }
  }
});
