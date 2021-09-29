const card = document.querySelector(".card");

card.addEventListener("click", flipCard);

function flipCard() {
    card.classList.toggle("flipCard");
}