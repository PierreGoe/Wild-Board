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
    name: "Mona Lucie",
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
    name: "Mona Julie",
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
    name: "Mona Frack",
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
    name: "Mona Jacky",
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

function createWildersCard(name, id) {
  const cardContainer = document.querySelector(".card-container");

  const cardBody = document.createElement("article");
  cardBody.setAttribute("class", "card");
  cardContainer.appendChild(cardBody);

  const cardFront = document.createElement("div");
  cardFront.setAttribute("class", "front");
  // content to add

  const cardImage = document.createElement("img");
  cardImage.setAttribute("src", "source/image/pictureUser1.jpg");
  cardImage.setAttribute("class", "pictureProfil");
  cardFront.appendChild(cardImage);

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
  const btnBackCard = document.createElement("button")
  btnBackCard.setAttribute("id", `btnProfile${id}`)
  btnBackCard.setAttribute("class", "btnProfile")
  cardBack.appendChild(btnBackCard)  

  const buttons = document.createElement("div");
  cardBack.appendChild(buttons);

  const githubLink = document.createElement("a");
  githubLink.setAttribute("href", "http://google.com");
  buttons.appendChild(githubLink);

  const gitHubLogo = document.createElement("img");
  gitHubLogo.setAttribute(
    "src",
    "https://img.icons8.com/material-outlined/24/000000/github.png"
  );
  githubLink.appendChild(gitHubLogo);

  const linkedinLink = document.createElement("a");
  linkedinLink.setAttribute("href", "http://google.com");
  buttons.appendChild(linkedinLink);
  const linkedinLogo = document.createElement("img");
  linkedinLogo.setAttribute(
    "src",
    "https://img.icons8.com/material-outlined/24/000000/linkedin--v1.png"
  );
  linkedinLink.appendChild(linkedinLogo);

  const cvLink = document.createElement("a");
  cvLink.setAttribute("href", "http://google.com");
  buttons.appendChild(cvLink);
  const cvLogo = document.createElement("img");
  cvLogo.setAttribute(
    "src",
    "https://img.icons8.com/material-rounded/24/000000/parse-from-clipboard.png"
  );
  cvLink.appendChild(cvLogo);
}

for (let i = 0; i < wildersInfos.length; i++) {
    createWildersCard(wildersInfos[i].name, wildersInfos.indexOf(wildersInfos[i]));
    console.log[i];
}

const cards = document.querySelectorAll(".card");
console.log(cards);
console.log(cards.length);

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", flipCard);
  function flipCard() {
    cards[i].classList.toggle("flipCard");
  }
}




// Modal
const modal = document.querySelector("#modalUserProfile");
const modalContent = document.querySelector(".modalContent")
const btns = document.querySelectorAll(".btnProfile");
const span = document.querySelector(".close");
for(let i=0; i<btns.length; i++){
    console.log(btns[i])
    btns[i].addEventListener('click', function(){
        modal.style.display = "block";
    });
    span.addEventListener('click', function(){
        modal.style.display = "none";
        deleteModalContent();
    });
    modal.addEventListener('click', function(){
        modal.style.display = "none";
        deleteModalContent();
    });
}
    





function creatModalContent(id){

    const titleModal = document.createElement("h1")
    titleModal.textContent = wildersInfos[id].name
    modalContent.appendChild(titleModal)

}

function deleteModalContent(){
    while (modalContent.firstChild){
        modalContent.removeChild(modalContent.lastChild)
    }
}


const allBtn = document.querySelectorAll("button")
for(let i=0; i<allBtn.length; i++){
    allBtn[i].addEventListener('click', function(){
        
        creatModalContent(i)
    })
}


