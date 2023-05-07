window.addEventListener("load", showLetter)
var imgList = ["apple", "orange", "watermelon", "pear", "strawberry", "lemon"];

function generateRandomForArray() {
    var num = Math.floor(Math.random() * 6);
    return num;
}

function generateRandom() {
    var num = Math.floor(Math.random() * 600);
    return num;
}

let div = document.getElementById("wrapper");
function showLetter() {
    var letter = imgList[generateRandomForArray()];
    let element = document.createElement("img");
    element.src = "img/" + letter + ".png";
    div.append(element);
    var left = generateRandom();
    var top = generateRandom();
    element.style.position = "absolute";
    element.style.top = generateRandom() + 50 + "px";
    element.style.left = generateRandom() + 300 + "px";
    element.addEventListener('click', collectFruit);
}

let ctr = 0;
function collectFruit(event) {
    event.target.style.visibility = "hidden";
    ctr++;
    document.getElementById("counter").innerHTML = ctr;
    showLetter();
    if (ctr == 20) {
        alert("You win!");
    }
}
