let randomNumber1 = Math.random(); //Random number one 
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

let randomNumber2 = Math.random(); //Random number two
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

function changeDiceeOne(randomNum) {
    let imageOne = document.querySelector("div .img1")
    if (randomNum == 1) {
        imageOne.setAttribute("src", "images/dice1.png");
    }
    else if (randomNum == 2) {
        imageOne.setAttribute("src", "images/dice2.png");
    }
    else if (randomNum == 3) {
        imageOne.setAttribute("src", "images/dice3.png");
    }
    else if (randomNum == 4) {
        imageOne.setAttribute("src", "images/dice4.png");
    }
    else if (randomNum == 5) {
        imageOne.setAttribute("src", "images/dice5.png");
    }
    else if (randomNum == 6) {
        imageOne.setAttribute("src", "images/dice6.png");
    }
}

function changeDiceeTwo(randomNum) {
    let imageOne = document.querySelector("div .img2");
    if (randomNum == 1) {
        imageOne.setAttribute("src", "images/dice1.png");
    }
    else if (randomNum == 2) {
        imageOne.setAttribute("src", "images/dice2.png");
    }
    else if (randomNum == 3) {
        imageOne.setAttribute("src", "images/dice3.png");
    }
    else if (randomNum == 4) {
        imageOne.setAttribute("src", "images/dice4.png");
    }
    else if (randomNum == 5) {
        imageOne.setAttribute("src", "images/dice5.png");
    }
    else if (randomNum == 6) {
        imageOne.setAttribute("src", "images/dice6.png");
    }
}

function whoWins(randomOne, randomTwo) {
    if (randomTwo == randomOne) {
        document.querySelector("h1").innerHTML = "Draw!";
    }
    else if (randomTwo > randomOne) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
}


changeDiceeOne(randomNumber1);
changeDiceeTwo(randomNumber2);
whoWins(randomNumber1, randomNumber2);