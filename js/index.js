const wildersInfos = [
  {
    name: "Mona Lisa",
    age: "19",
    birthday: "",
    pets: false,
    nameOfPets: "",
    favoritFood: "",
    wildSide: "",
    social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
    },
  },
  {
    name: "Mona Lisa",
    age: "19",
    birthday: "",
    pets: false,
    nameOfPets: "",
    favoritFood: "",
    wildSide: "",
    social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
    },
  },
  {
    name: "Mona Lisa",
    age: "19",
    birthday: "",
    pets: false,
    nameOfPets: "",
    favoritFood: "",
    wildSide: "",
    social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
    },
  },
  {
    name: "Mona Lisa",
    age: "19",
    birthday: "",
    pets: false,
    nameOfPets: "",
    favoritFood: "",
    wildSide: "",
    social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
    },
  },
  {
    name: "Mona Lisa",
    age: "19",
    birthday: "",
    pets: false,
    nameOfPets: "",
    favoritFood: "",
    wildSide: "",
    social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
    },
  },
  {
    name: "Mona",
    age: "19",
    birthday: "",
    pets: false,
    nameOfPets: "",
    favoritFood: "",
    wildSide: "",
    social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
    },
  },
];

function createWildersCard(name) {
  const cardContainer = document.querySelector(".card-container");

  const cardBody = document.createElement("article");
  cardBody.setAttribute("class", "card");
  cardContainer.appendChild(cardBody);

  const cardFront = document.createElement("div");
  cardFront.setAttribute("class", "front");
  // content to add


  const cardImage = document.createElement('img')
  cardImage.setAttribute('src', "source/image/pictureUser1.jpg")
  cardImage.setAttribute('class', "pictureProfil")
  cardFront.appendChild(cardImage) 


  cardBody.appendChild(cardFront);
  const fontTitle = document.createElement("h2");
  fontTitle.textContent = name;
  cardFront.appendChild(fontTitle);

  
  
  const cardBack = document.createElement("div");
  cardBack.setAttribute("class", "back");
  // content to add
  cardBody.appendChild(cardBack);
  const backTitle = document.createElement("h2");
  backTitle.textContent = name;
  cardBack.appendChild(backTitle);

  
}

for (let i = 0; i < wildersInfos.length; i++) {
    createWildersCard(wildersInfos[i].name);
    console.log[i];
}

const cards = document.querySelectorAll(".card");
console.log(cards);
console.log(cards.length);

for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", flipCard);
    function flipCard() {
      cards[i].classList.toggle("flipCard");
    }
}