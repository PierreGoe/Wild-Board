const wildersInfos = [
  {
    name: "Mona",
    lastname: "Lisa",
    age: "19",
    birthday: "45/05/3907",
    pets: false,
    nameOfPets: "lili",
    favoritFood: "pizza",
    wildSide: "elle sait rester immobile durant des heures",
    hobby:"peinture",
    skills:"Le mime",
    motivation:"Aucune",
    picureProfile: "./source/image/users/pictureUser1.jpg",
    social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
    },
  },
  {
    name: "leonardo",
    lastname: "devinci",
    age: "19",
    birthday: "45/05/3907",
    pets: false,
    nameOfPets: "lili",
    favoritFood: "pizza",
    wildSide: "elle sait rester immobile durant des heures",
    hobby:"peinture",
    skills:"Le mime",
    motivation:"Aucune",
    picureProfile: "./source/image/users/pictureUser2.jpeg",
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
  cardImage.setAttribute("src", "source/image/users/pictureUser1.jpg");
  cardImage.setAttribute("class", "pictureProfil");
  cardFront.appendChild(cardImage);

  cardBody.appendChild(cardFront);
  const fontTitle = document.createElement("h2");
  fontTitle.textContent = name;
  cardFront.appendChild(fontTitle);

  const cardBack = document.createElement("div");
  cardBack.setAttribute("class", "back"); 
  const cardBackContainer = document.createElement("div");
  cardBackContainer.setAttribute("class", "back-container");
  cardBack.appendChild(cardBackContainer);

  // content to add
  cardBody.appendChild(cardBack);
  

//   button plus info back card
  const btnBackCard = document.createElement("button");
  btnBackCard.setAttribute("id", `btnProfile${id}`);
  btnBackCard.setAttribute("class", "btnProfile"); 
  btnBackCard.textContent = "Plus d'infos";
  cardBackContainer.appendChild(btnBackCard);

  const icones = document.createElement("div");
  icones.setAttribute("class", "icones-container");
  cardBackContainer.appendChild(icones);


  const githubLink = document.createElement("a");
  githubLink.setAttribute("href", "http://google.com");
  icones.appendChild(githubLink);

  const gitHubLogo = document.createElement("img");
  gitHubLogo.setAttribute(
    "src",
    "https://img.icons8.com/material-outlined/30/000000/github.png"
  );
  githubLink.appendChild(gitHubLogo);

  const linkedinLink = document.createElement("a");
  linkedinLink.setAttribute("href", "http://google.com");
  icones.appendChild(linkedinLink);
  const linkedinLogo = document.createElement("img");
  linkedinLogo.setAttribute(
    "src",
    "https://img.icons8.com/material-outlined/30/000000/linkedin--v1.png"
  );
  linkedinLink.appendChild(linkedinLogo);

  const cvLink = document.createElement("a");
  cvLink.setAttribute("href", "http://google.com");
  icones.appendChild(cvLink);
  const cvLogo = document.createElement("img");
  cvLogo.setAttribute(
    "src",
    "https://img.icons8.com/material-rounded/30/000000/parse-from-clipboard.png"
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
for (let i = 0; i < btns.length; i++) {
        
        console.log(btns[i]);
        btns[i].addEventListener("click", function () {
        modal.style.display = "block";
        });
        span.addEventListener("click", function () {
        modal.style.display = "none";
        });
        modal.addEventListener("click", function () {
        modal.style.display = "none";
        });
}
    

function creatModalContent(id){

    // Picture Profile 
    const profileImage = document.createElement("div")
    profileImage.setAttribute("class", "imageModal")
    profileImage.style.backgroundImage = `url('${wildersInfos[id].picureProfile}')`; 
    modalContent.appendChild(profileImage)
    // Name User
    const titleModal = document.createElement("h2")
    titleModal.textContent = wildersInfos[id].name
    modalContent.appendChild(titleModal)
    // Age User
    const ageUser = document.createElement("p")
    ageUser.textContent = wildersInfos[id].age
    modalContent.appendChild(ageUser)
    // birthday User
    const birthdayUser = document.createElement("p")
    birthdayUser.textContent = wildersInfos[id].birthday
    modalContent.appendChild(birthdayUser)
    // pets User
    const petsUser = document.createElement("p")
    petsUser.textContent = wildersInfos[id].pets
    modalContent.appendChild(petsUser)
    // name of pets User
    const nameOfPets = document.createElement("p")
    nameOfPets.textContent = wildersInfos[id].nameOfPets
    modalContent.appendChild(nameOfPets)
    // favorite foods User
    const favoritFood = document.createElement("p")
    petsUser.textContent = wildersInfos[id].favoritFood
    modalContent.appendChild(favoritFood)
    // wild side User
    const wildSide = document.createElement("p")
    wildSide.textContent = wildersInfos[id].wildSide
    modalContent.appendChild(wildSide)
    // hobby User
    const petsUser = document.createElement("p")
    petsUser.textContent = wildersInfos[id].pets
    modalContent.appendChild(petsUser)
    // skills User
    const petsUser = document.createElement("p")
    petsUser.textContent = wildersInfos[id].pets
    modalContent.appendChild(petsUser)
    // motivation User
    const petsUser = document.createElement("p")
    petsUser.textContent = wildersInfos[id].pets
    modalContent.appendChild(petsUser)
    // picture User
    const petsUser = document.createElement("p")
    petsUser.textContent = wildersInfos[id].pets
    modalContent.appendChild(petsUser)
    // linkedin User
    const petsUser = document.createElement("p")
    petsUser.textContent = wildersInfos[id].pets
    modalContent.appendChild(petsUser)
    // git hub User
    const petsUser = document.createElement("p")
    petsUser.textContent = wildersInfos[id].pets
    modalContent.appendChild(petsUser)
    // Cv User
    const petsUser = document.createElement("p")
    petsUser.textContent = wildersInfos[id].pets
    modalContent.appendChild(petsUser)
    


    




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

// copyright year
let currentYear = (new Date()).getFullYear();
document.querySelector(".copyrightYear").innerHTML = currentYear;