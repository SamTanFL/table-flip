console.log("Jiayous");

/*let secretWord = [["c", "a", "t"],[]];
let wrongTries = ["(", "╯", "ರ", " ",  "~", " ", "ರ", "）", "╯", "︵", " ", "┻", "━", "┻"]
(╯ರ ~ ರ）╯︵ ┻━┻*/

let i = 0;
let correctLetter = 0;
let wordFound = 0;
let wordAttempts = 0;
let failFlips = "";
let foundLetters = "";
let words = {
    wrongTries: ["(", "╯", "ರ", " ",  "~", " ", "ರ", "）", "╯", "︵", " ", "┻", "━", "┻"],
    secretWord1: {
        secretArray: ["c", "a", "t"],
        secretWord: [0, 0, 0],
    }
}

var letterPosition = function(currentInput) {
    if (currentInput === "c") {
        words.secretWord1.secretWord[0] = "c";
        correctLetter++;
    } else if (currentInput === "a") {
        words.secretWord1.secretWord[1] = "a";
        correctLetter++;
    } else if (currentInput === "t") {
        words.secretWord1.secretWord[2] = "t";
        correctLetter++;}
    }

var tableFlipping = function() {
    failFlips = failFlips + words.wrongTries[wordAttempts];
    return failFlips;
}

var win = function() {
    alert("Congrats you won!");
    correctLetter = 0;
}

var gameOver = function() {
    alert("(╯ರ ~ ರ）╯︵ ┻━┻" + "\n" + "You Lose!");
}

var chacSearch = function(currentInput) {
    while( i<words.secretWord1.secretArray.length ){
        if( words.secretWord1.secretArray[i] === currentInput){
            letterPosition(currentInput);
/*            words.secretWord1.secretArray.splice(i, 1,)*/
            console.log(words.secretWord1.secretArray)
            i = 0;
            return;} i++}
            tableFlipping();
            wordAttempts++;
            if (wordAttempts >= 14) {
                gameOver();
                return wordAttempts;
            }
        }


var inputHappened = function(currentInput){
    chacSearch(currentInput);
    document.querySelector('#input').value = ""
    if (correctLetter === 3) {
        win();
    }
    return currentInput + "\n" + words.secretWord1.secretWord + "\n" + failFlips;
};

/*printArray(secretWord[0]);*/

//experimental function
/*var printArray = function(arrays) {
    while (i <= arrays.length) {
        word + arrays[i];
        if (i > 15) {
            debugger;
        };
    return word;
    }
}*/


/* else {
                tableFlipping();
                wordAttempts++
                if (wordAttempts === 14) {
                    gameOver(); }
                return wordAttempts;
            }
} */