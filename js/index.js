const wildersInfos = [
  {
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
    picureProfile: "./source/image/users/victor.jpg",
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

const cardContainer = document.querySelector(".card-container");
const searchInput = document.getElementById("searchInput");
const searchSelect = document.getElementById("searchSelect");

searchSelect.insertAdjacentHTML(
  "beforeend",
  '<option value="name">prénom</option>'
);
searchSelect.insertAdjacentHTML(
  "beforeend",
  '<option value="lastname">nom</option>'
);

// Modal
const modal = document.querySelector("#modalUserProfile");
const modalContent = document.querySelector(".modalContent");

const span = document.querySelector(".close");

/**
 * Creation de la carte d'un user
 * @param {string} name nom du user
 * @param {number} id
 */
function createWildersCard(datas, index) {
  const id = wildersInfos.indexOf(datas[index]); // a conserver pour l'affichage dans la modal
  console.log(datas);
  console.log(id);
  const cardBody = document.createElement("article");
  cardBody.setAttribute("class", "card");
  cardContainer.appendChild(cardBody);

  const cardFront = document.createElement("div");
  cardFront.setAttribute("class", "front");
  // content to add

  const cardImage = document.createElement("img");
  cardImage.setAttribute("src", datas[index].picureProfile);
  cardImage.setAttribute("class", "pictureProfil");

  const fontTitle = document.createElement("h2");
  fontTitle.textContent = datas[index].name;
  cardFront.appendChild(cardImage);
  cardFront.appendChild(fontTitle);

  cardBody.appendChild(cardFront);

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

/**
 * Creation des informations du user dans la fenetre modale
 * @param {array} datas
 * @param {number} id
 */
function createModalContent(datas, id) {
  // Picture Profile
  const profileImage = document.createElement("div");
  profileImage.setAttribute("class", "imageModal");
  profileImage.style.backgroundImage = `url('${datas[id].picureProfile}')`;
  modalContent.appendChild(profileImage);
  // Name User
  const titleModal = document.createElement("h2");
  titleModal.textContent = datas[id].name;
  modalContent.appendChild(titleModal);
  // Age User
  const ageUser = document.createElement("p");
  ageUser.textContent = datas[id].age();
  modalContent.appendChild(ageUser);
  // birthday User
  const birthdayUser = document.createElement("p");
  birthdayUser.textContent = datas[id].birthday;
  modalContent.appendChild(birthdayUser);
  // pets User
  const petsUser = document.createElement("p");
  petsUser.textContent = datas[id].pets;
  modalContent.appendChild(petsUser);
  // name of pets User
  const namePetsUser = document.createElement("p");
  namePetsUser.textContent = datas[id].nameOfPets;
  modalContent.appendChild(namePetsUser);
  // favorite foods User
  const favoriteUserFood = document.createElement("p");
  favoriteUserFood.textContent = datas[id].favoritFood;
  modalContent.appendChild(favoriteUserFood);
  // wild side User
  const wildSideUser = document.createElement("p");
  wildSideUser.textContent = datas[id].wildSide;
  modalContent.appendChild(wildSideUser);
  // hobby User
  const hobbyUser = document.createElement("p");
  hobbyUser.textContent = datas[id].hobby;
  modalContent.appendChild(hobbyUser);
  // skills User
  const skillsUser = document.createElement("p");
  skillsUser.textContent = datas[id].skills;
  modalContent.appendChild(skillsUser);
  // motivation User
  const motivationUser = document.createElement("p");
  motivationUser.textContent = datas[id].motivation;
  modalContent.appendChild(motivationUser);
  // linkedin User
  const linkedinUser = document.createElement("a");
  linkedinUser.setAttribute("href", datas[id].social.linkedin);
  linkedinUser.setAttribute("target", "_blank");
  linkedinUser.innerHTML =
    "<img src='https://img.icons8.com/material-outlined/40/000000/linkedin--v1.png'>";
  modalContent.appendChild(linkedinUser);
  // git hub User
  const githubUser = document.createElement("a");
  githubUser.setAttribute("href", datas[id].social.gitHub);
  githubUser.setAttribute("target", "_blank");
  githubUser.innerHTML =
    "<img src='https://img.icons8.com/material-outlined/40/000000/github.png'>";
  modalContent.appendChild(githubUser);
  // Cv User
  const curriculumUser = document.createElement("a");
  curriculumUser.setAttribute("href", datas[id].social.cvUser);
  curriculumUser.setAttribute("target", "_blank");
  curriculumUser.innerHTML =
    "<img src='https://img.icons8.com/material-rounded/40/000000/parse-from-clipboard.png'>";
  modalContent.appendChild(curriculumUser);
}

function deleteModalContent() {
  while (modalContent.firstChild) {
    modalContent.removeChild(modalContent.lastChild);
  }
}

function displayAll() {
  cardContainer.innerHTML = "";
  for (let i = 0; i < wildersInfos.length; i++) {
    createWildersCard(wildersInfos, i);
  }
  const cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", flipCard);

    function flipCard() {
      cards[i].classList.toggle("flipCard");
    }
  }

  const btns = document.querySelectorAll(".btnProfile");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      createModalContent(wildersInfos, i);
      modal.style.display = "block";
    });
  }
}

/**
 * Recherche incrémentielle d'une valeur dans un tableau en fonction de la colonne "keyName" si besoin
 * @param {array} searchDatas tableau de données sur lequel on effectue la recherche
 * @param {string} searchValue
 * @param {number} keyName
 * @return {Array}
 */
function doSearch(
  searchDatas,
  searchValue,
  keyName = "",
  caseSensitive = false
) {
  const results = searchDatas.filter((row) => {
    let searchKey;

    if (keyName !== "") {
      searchKey = row[keyName];
    } else {
      searchKey = row;
    }

    if (typeof searchKey === "string" || searchKey instanceof String) {
      if (caseSensitive) {
        if (searchKey.includes(searchValue)) {
          return row;
        }
      } else {
        if (searchKey.toLowerCase().includes(searchValue.toLowerCase())) {
          return row;
        }
      }
    } else {
      if (caseSensitive) {
        if (searchKey.toString().includes(searchValue)) {
          return row;
        }
      } else {
        if (
          searchKey.toString().toLowerCase().includes(searchValue.toLowerCase())
        ) {
          return row;
        }
      }
    }
  });
  return results;
}

/**
 * fonction interne pour la recherche
 */
function search() {
  const searchValue = searchInput.value;
  const searchColumn = searchSelect.value;

  searchInput.setAttribute(
    "placeholder",
    "Rechercher dans " + searchSelect.textContent + " "
  );
  cardContainer.innerHTML = "";

  const results = doSearch(wildersInfos, searchValue, searchColumn);

  if (results.length < 1) {
    cardContainer.innerHTML = "<span>Aucun résultats</span>";
  } else {
    for (let i = 0; i < results.length; i++) {
      createWildersCard(results, i);
    }

    const cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", flipCard);

      function flipCard() {
        cards[i].classList.toggle("flipCard");
      }
    }

    const btns = document.querySelectorAll(".btnProfile");
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        createModalContent(results, i);
        modal.style.display = "block";
      });
    }
  }
}

//===================================
// init recherche
if (searchInput.addEventListener) {
  searchInput.addEventListener(
    "input",
    () => {
      search();
    },
    false
  );
} else if (searchInput.attachEvent) {
  searchInput.attachEvent("onpropertychange", () => {
    search();
  });
}

if (searchSelect.addEventListener) {
  searchSelect.addEventListener(
    "input",
    () => {
      search();
    },
    false
  );
} else if (searchInput.attachEvent) {
  searchSelect.attachEvent("onpropertychange", () => {
    search();
  });
}

window.addEventListener("DOMContentLoaded", displayAll());

//===================================
// modal events
span.addEventListener("click", function () {
  modal.style.display = "none";
  deleteModalContent();
});

modal.addEventListener("click", function () {
  modal.style.display = "none";
  deleteModalContent();
});

// copyright year
let currentYear = new Date().getFullYear();
document.querySelector(".copyrightYear").innerHTML = currentYear;

// Flame mode
const header = document.querySelector("header");
const btnFlame = document.createElement("button");
btnFlame.setAttribute("class", "flamebtn");
btnFlame.setAttribute("id", "flamebtnid");
btnFlame.textContent = "🔥don't click";
header.appendChild(btnFlame);

btnFlame.addEventListener("click", function () {
  const alldiv = document.querySelectorAll("div");
  for (let i = 0; i < allBtn.length; i++) {
    alldiv[
      i
    ].style.backgroundImage = `url('https://c.tenor.com/jnyLvpwBKOUAAAAi/fireplace-fire.gif')`;
  }
});

// smooth button
const btn = document.querySelector(".smooth-btn");

btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
