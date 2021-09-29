const card = document.querySelector(".card");

card.addEventListener("click", flipCard);

function flipCard() {
    card.classList.toggle("flipCard");
}

const cardContainer = document.querySelector("card-container");

const cardBody = document.createElement("article");
cardBody.setAttribute("class", "card");
cardContainer.appendChild(cardBody);

const cardFront = document.createElement("div");
cardFront.setAttribute("class", "front");
// content to add
cardBody.appendChild(cardFront);

const cardBack = document.createElement("div");
cardBack.setAttribute("class", "back");
// content to add
cardBody.appendChild(cardBack);