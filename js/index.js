const wildersInfos = [
  { 
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
  
];

function createWildersCard(name, id) {
  const cardContainer = document.querySelector(".card-container");

  const cardBody = document.createElement("article");
  cardBody.setAttribute("class", "card");
  cardContainer.appendChild(cardBody);

  const cardFront = document.createElement("div");
  cardFront.setAttribute("class", "front");


  // content to add Front Side
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


  // content to add Back Side
  cardBody.appendChild(cardBack);
  const backTitle = document.createElement("h2");
  backTitle.textContent = name;
  cardBack.appendChild(backTitle);
  const btnBackCard = document.createElement("button")
  btnBackCard.setAttribute("id", `btnProfile${id}`)
  btnBackCard.setAttribute("class", "btnProfile")
  cardBack.appendChild(btnBackCard)  


  
}

for (let i = 0; i < wildersInfos.length; i++) {
    createWildersCard(wildersInfos[i].name, wildersInfos.indexOf(wildersInfos[i]));
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




// Modal
const modal = document.querySelector("#modalUserProfile");
const btns = document.querySelectorAll(".btnProfile");
const span = document.querySelector(".close");
for(let i=0; i<btns.length; i++){
    console.log(btns[i])
    btns[i].addEventListener('click', function(){
        modal.style.display = "block";
    });
    span.addEventListener('click', function(){
        modal.style.display = "none";
    });
    modal.addEventListener('click', function(){
        modal.style.display = "none";
    });
}
    



// function createWildersModal(id){
//     const modal = document.querySelector("#modalUserProfile");
//     const idUser = document.createElement('p');
//     idUser.innerHTML= id;
//     modal.appendChild(idUser)
// }


function creatModalContent(id){
    console.log(wildersInfos[id].name)

}

const allBtn = document.querySelectorAll("button")
for(let i=0; i<allBtn.length; i++){
    allBtn[i].addEventListener('click', function(){
        
        creatModalContent(i)
    })
}


