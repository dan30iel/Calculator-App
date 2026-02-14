const calculatorScreen = document.querySelector('.inner-screen');

function updateScreen(text) {
    calculatorScreen.innerHTML = text;
    // convert text to string to safely check length
    let textlength = text.toString().length;
    // Adjusts font size based on length
    if (textlength > 19) {
        calculatorScreen.style.fontSize = "20px";
    } else if (textlength > 16) {
        calculatorScreen.style.fontSize = "25px";
    } else if (textlength > 14) {
        calculatorScreen.style.fontSize = "30px";
    } else if (textlength > 12) {
        calculatorScreen.style.fontSize = "35px";
    } else if (textlength > 11) {
        calculatorScreen.style.fontSize = "40px";
    } else {
        calculatorScreen.style.fontSize = "45px";
    }
    // allows automatic scrolling to the left when text overflows
    calculatorScreen.scrollLeft = calculatorScreen.scrollWidth;
}

// gets the inputed numbers and symbols
let inputNum = "";

function getInput(buttonNumber) {
    inputNum = `${inputNum}` + `${buttonNumber}`;
    updateScreen(inputNum);
}

// gets the answer to calculations
function getAnswer() {
    let lastIndex = inputNum.length - 1;
    let lastChar = inputNum[lastIndex];
    const charSymbol = ['/', '*', '-', '+'];

    if (!charSymbol.includes(lastChar)) {
        try {
            inputNum = eval(inputNum);
            updateScreen(inputNum);
        } catch {
            updateScreen("Error");
            inputNum = "";
        }
    }
}

// clears the calculations
function clearsAnswer() {
    inputNum = "";
    updateScreen(inputNum);
}

// deletes calculations
function deleteInput() {
    inputNum = inputNum.slice(0, -1);
    updateScreen(inputNum);
}

// uses keyboard to input calculations

window.addEventListener('keydown', (event) => {
    if(event.key === "Escape") {
        clearsAnswer();
    }
});

window.addEventListener('keydown', (event) => {
    if(event.key === "Delete") {
        deleteInput();
    }
});

window.addEventListener('keydown', (event) => {
    if(event.key === "Enter") {
        getAnswer();
    }
});

window.addEventListener('keydown', (event) => {
    const buttonChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '/', '*', '-', '+', '.'];
    if(buttonChar.includes(event.key)) {
        getInput(event.key);
    }
});
