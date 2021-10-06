const wildersInfos = [{
  name: "Benoît",
  lastname: "Zenone",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/benoit.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},
{
  name: "Caroline",
  lastname: "Copy-Denhez",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/caroline.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},
{
  name: "Cédric",
  lastname: "Lassalle",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/cedric.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},
{
  name: "Guillaume",
  lastname: "Desmis",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/guillaume.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},
{
  name: "Héloïse",
  lastname: "Ferla",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/heloise.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},
{
  name: "Jonathan",
  lastname: "Guillot",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/jonathan.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},
{
  name: "Marion",
  lastname: "Grolleau",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/marion.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},
{
  name: "Othmane",
  lastname: "Khiter",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/othmane.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},
{
  name: "Quentin",
  lastname: "Macquart",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/quentin.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},
{
  name: "Sonia",
  lastname: "Benoumeur",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/sonia.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},
{
  name: "Bertrand",
  lastname: "Briset",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/bertrand.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},
{
  name: "Claire",
  lastname: "Delaleau",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/claire.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},
{
  name: "Franck",
  lastname: "Depoorter",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/franck.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},
{
  name: "Guillaume",
  lastname: "Keerhem",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/guillaumeK.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},
{
  name: "Jeremy",
  lastname: "Vandomme",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/jeremy.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},

{
  name: "Luigi",
  lastname: "Menez",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/luigi.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},
{
  name: "Nacyme",
  lastname: "Gallel",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/nacyme.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},
{
  name: "Pierre",
  lastname: "Goemans",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/pierre.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},
{
  name: "Romain",
  lastname: "Brehon",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/romain.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},
{
  name: "Victor",
  lastname: "Morel",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/victore.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},
{
  name: "Hacene",
  lastname: "Hamroune",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/hacene.jpg",
  social: {
      linkedin: "lien Linkedin",
      gitHub: "lien gitHub",
      cvUser: "lien cv",
  },
},
{
  name: "Loic",
  lastname: "Brassart",
  age: function () {
    let diff = Date.now() - this.calcAge.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  },
  calcAge: new Date(1980, 7, 4),
  birthday: "45/05/3907",
  pets: false,
  nameOfPets: "lili",
  favoritFood: "pizza",
  wildSide: "elle sait rester immobile durant des heures",
  hobby: "peinture",
  skills: "Le mime",
  motivation: "Aucune",
  picureProfile: "./source/image/users/loic.jpg",
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
  cardImage.setAttribute("src", wildersInfos[id].picureProfile);
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
}



const cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
cards[i].addEventListener("click", flipCard);

function flipCard() {
  cards[i].classList.toggle("flipCard");
}
}




// Modal
const body = document.querySelector("body");
const modal = document.querySelector("#modalUserProfile");
const modalContent = document.querySelector(".modalContent")
const btns = document.querySelectorAll(".btnProfile");
const span = document.querySelector(".close");

for (let i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", function() {
        modal.style.display = "block";
        body.style.overflow = "hidden";
    });
    span.addEventListener("click", function() {
        modal.style.display = "none";
        deleteModalContent()
        body.style.overflow = "auto";
    });
    modal.addEventListener("click", function() {
        modal.style.display = "none";
        deleteModalContent()
        body.style.overflow = "auto";
    });
}


function creatModalContent(id) {

    // Picture Profile 

    const profileImage = document.createElement("div");
    profileImage.setAttribute("class", "imageModal");
    profileImage.style.backgroundImage = `url('${wildersInfos[id].picureProfile}')`;
    modalContent.appendChild(profileImage);
    // create content for users info
    const modalUserInfos = document.createElement('div')
    modalUserInfos.setAttribute("class", "modalUserInfos")
    modalContent.appendChild(modalUserInfos);
    const UserInfoInModal = document.querySelector(".modalUserInfos")
    // Name Users
    const titleModal = document.createElement("h2");
    titleModal.innerHTML = `<span class = titleAnswer>Nom : </span>${wildersInfos[id].name}`;
    UserInfoInModal.appendChild(titleModal);
    // Age User
    const ageUser = document.createElement("p");
    ageUser.innerHTML = `<span class = titleAnswer>Age : </span>${wildersInfos[id].age()}`;
    UserInfoInModal.appendChild(ageUser);
    // birthday User
    const birthdayUser = document.createElement("p");
    birthdayUser.innerHTML = `<span class = titleAnswer>Date de naissance: </span>${wildersInfos[id].birthday}`;
    UserInfoInModal.appendChild(birthdayUser);
    // pets User
    const petsUser = document.createElement("p");
    petsUser.innerHTML = `<span class = titleAnswer>Animal : </span>${wildersInfos[id].pets}`;
    UserInfoInModal.appendChild(petsUser);
    // name of pets User
    const namePetsUser = document.createElement("p");
    namePetsUser.innerHTML = `<span class = titleAnswer>Nom de son animal : </span>${wildersInfos[id].nameOfPets}`;
    UserInfoInModal.appendChild(namePetsUser);
    // favorite foods User
    const favoriteUserFood = document.createElement("p");
    favoriteUserFood.innerHTML = `<span class = titleAnswer>Son plat préféré : </span>${wildersInfos[id].favoritFood}`;
    UserInfoInModal.appendChild(favoriteUserFood);
    // wild side User
    const wildSideUser = document.createElement("p");
    wildSideUser.innerHTML = `<span class = titleAnswer>Son cote Wild : </span>${wildersInfos[id].wildSide}`;
    UserInfoInModal.appendChild(wildSideUser);
    // hobby User
    const hobbyUser = document.createElement("p");
    hobbyUser.innerHTML = `<span class = titleAnswer>Hobby : </span>${wildersInfos[id].hobby}`;
    UserInfoInModal.appendChild(hobbyUser);
    // skills User
    const skillsUser = document.createElement("p");
    skillsUser.innerHTML = `<span class = titleAnswer>Compétance : </span>${wildersInfos[id].skills}`;
    UserInfoInModal.appendChild(skillsUser);
    // motivation User
    const motivationUser = document.createElement("p");
    motivationUser.innerHTML = `<span class = titleAnswer>Motivation : </span>${wildersInfos[id].motivation}`;
    UserInfoInModal.appendChild(motivationUser);
    // creat Div for Icones
    const divIcones = document.createElement("div");
    divIcones.setAttribute("class","containerIcone")
    
    // linkedin User
    const linkedinUser = document.createElement("a");
    linkedinUser.setAttribute("href", wildersInfos[id].social.linkedin);
    linkedinUser.setAttribute("target", "_blank");
    linkedinUser.innerHTML = "<img src='https://img.icons8.com/material-outlined/40/000000/linkedin--v1.png'>";
    divIcones.appendChild(linkedinUser);
    // git hub User
    const githubUser = document.createElement("a");
    githubUser.setAttribute("href", wildersInfos[id].social.gitHub);
    githubUser.setAttribute("target", "_blank");
    githubUser.innerHTML = "<img src='https://img.icons8.com/material-outlined/40/000000/github.png'>";
    divIcones.appendChild(githubUser);
    // Cv User
    const curriculumUser = document.createElement("a");
    curriculumUser.setAttribute("href", wildersInfos[id].social.cvUser);
    curriculumUser.setAttribute("target", "_blank");
    curriculumUser.innerHTML = "<img src='https://img.icons8.com/material-rounded/40/000000/parse-from-clipboard.png'>";
    divIcones.appendChild(curriculumUser);
    UserInfoInModal.appendChild(divIcones)
    


}

function deleteModalContent() {
while (modalContent.firstChild) {
  modalContent.removeChild(modalContent.lastChild);
}
}


const allBtn = document.querySelectorAll("button")
for (let i = 0; i < allBtn.length; i++) {
allBtn[i].addEventListener('click', function() {

  creatModalContent(i);
})
}

// copyright year
let currentYear = (new Date()).getFullYear();
document.querySelector(".copyrightYear").innerHTML = currentYear;




// Flame mode 
const header = document.querySelector('header')
const btnFlame = document.createElement('button') 
btnFlame.setAttribute("class","flamebtn")
btnFlame.setAttribute("id","flamebtnid")
btnFlame.textContent= "don't click"
header.appendChild(btnFlame)



btnFlame.addEventListener('click', function(){

    const alldiv = document.querySelectorAll('div')
    for (let i = 0; i < allBtn.length; i++){
        alldiv[i].style.backgroundImage = `url('https://c.tenor.com/jnyLvpwBKOUAAAAi/fireplace-fire.gif')`;
    }

})



