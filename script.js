let ctr = 0;
function collectFruit(event) {
    event.target.style.visibility = "hidden";
    ctr++;
    document.getElementById("counter").innerHTML = ctr;
    if (ctr == 20) {
        alert("You win!");
    }
}

let images = document.querySelectorAll("img");


for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', collectFruit);
}

