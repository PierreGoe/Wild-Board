class Wilders {
    constructor(name, lastname, birthday, birthYear, birthMonth, birthDate, pets, nameOfPets, favoriteFood, wildSide, hobby, skills, motivation, picureProfile, linkedin, gitHub, cvUser) {
        this.name = name;
        this.lastname = lastname;
        this.birthday = birthday;
        this.calcAge = new Date(birthYear, birthMonth, birthDate);
        this.pets = pets;
        this.nameOfPets = nameOfPets;
        this.favoritFood = favoriteFood;
        this.wildSide = wildSide;
        this.hobby = hobby;
        this.skills = skills;
        this.motivation = motivation;
        this.picureProfile = picureProfile;
        this.social = {
            linkedin: linkedin,
            gitHub: gitHub,
            cvUser: cvUser,
        }
    }
    age() {
        let diff = Date.now() - this.calcAge.getTime();
        let age = new Date(diff);
        return Math.abs(age.getUTCFullYear() - 1970) + " ans";
    }
}

const wildersInfos = [
    new Wilders("Jérémy", "Vandomme", "02/11/1989", 1989, 11, 02, "Non", "Aucun", "Les frites", "Je suis le petit comique du groupe", "Le sport en général", "Le commerce, la communication et le marketing", "J'ai intégré la Wild pour son réseaux et le programme de formation, et souhaite devenir développeur car j'aimes le code", "./source/image/users/jeremy", "https://www.linkedin.com/in/jérémy-vandomme/", "https://github.com/Vjerem", "https://www.linkedin.com/in/jérémy-vandomme/"),
    new Wilders("Guillaume", "Keerhem", "17/06/1994", 1994, 06, 17, "Oui, un chat", "Loulou", "Katsu-Karee (Riz au curry avec une tranche de porc panné", "Je me suis blessé l'oeil droit avec mes lunettes de soleil en pleine nuit. J'ai voulu imiter le 'Yeeaaaah' d'Horatio Caine.", "Jeux vidéo, manga, anime, Japon, commenter du speedrun.", "HTML, CSS, JavaScript, commenter des évènement de jeux vidéo en japonais, rang Champion sur Rocket League (mais pas sûr que ça me serve en milieu professionel)", "J'ai intégré la Wild car la mentalité de l'école m'a énormément plu, et je veux devenir developpeur car j'adore l'aspect logique, un peu comme un puzzle, ainsi que le fait de créer ce qu'on veut a partir de rien", "./source/image/users/guillaumeK", "https://www.linkedin.com/in/guillaume-keerhem/", "https://github.com/KeerhemFR", "https://keerhemfr.github.io/cvOnline/guillaume-keerhem-cv-integrateur-web-septembre-2021.pdf"),
    new Wilders("Benoit", "Zenone", "28/06/1993", 1993, 06, 28, "Non", "Aucun", "Pizza", "Je chante des opening d'anime sous la douche", "Cinéma, manga, anime", "Web", "J'ai intégré la Wild pour devenir developpeur web, et ce métier m'attire pour le côté passionnant de la tech", "./source/image/users/benoit", "https://www.linkedin.com/in/beno%C3%AEt-zenone-7763aab1/", "https://github.com/BenZen59", "https://www.linkedin.com/in/beno%C3%AEt-zenone-7763aab1/"),
    new Wilders("Cédric", "Lassalle", "04/08/1980", 1980, 08, 04, "Non", "Aucun", "Spaghetti bolognaise", "J'aimes coder en chaussette", "Mécanique auto, manga, jeux", "Gestion de chantier, prise de mesure, dessin technique", "J'ai intégré la Wild pour apprendre a travailler en groupe et appronfondir les connaissances en code, et je veux devenir développeur pour la possibilité de création et pour décourir le produit terminé", "./source/image/users/cedric", "https://www.linkedin.com/in/cedric-rene-jean-lasalle-b783891bb/", "https://github.com/fortanza", "https://www.linkedin.com/in/cedric-rene-jean-lasalle-b783891bb/"),
    new Wilders("Luigi", "Menez", "30/08/1981", 1981, 08, 30, "Oui, un lapin", "Luo", "Raclette", "Je stream tout les soirs de 21h à minuit", "Jeux vidéo", "Le commerce, le sport", "J'ai intégré la Wild pour devenir développeur web car j'aimes les métiers de la tech, et me caser la tête pour trouver des solutions", "./source/image/users/luigi", "https://www.linkedin.com/in/luigi-menez-03a398221/", "https://github.com/LuigiMenez", "https://www.linkedin.com/in/luigi-menez-03a398221/"),
    new Wilders("Romain", "Brehon", "28/04/1993", 1993, 04, 28, "Non", "Aucun", "Pizza", "Hier j'ai mangé une pizza", "La musique, les cartoons, le foot", "Bof je sais pas", "Utiliser Tindev", "./source/image/users/romain", "https://www.linkedin.com/in/romain-brehon/", "https://github.com/IrohsTea", "https://www.linkedin.com/in/romain-brehon/"),
    new Wilders("Othmane", "Kither", "03/10/1991", 1991, 10, 03, "Non", "Aucun", "Poulet aux olives", "J'oublie trés souvent de fermer la braguette de mon pantalon comme lors de la présentation d'un collègue wilder à la rentrée en plus d'avoir porter un claçon fluo rose", "Mangas,sports,jeux video,cinéma", "Paramédical et j'espère commencer à en avoir dans la tech", "J'ai intégrer la Wild pour sa méthodologie d'apprentissage et sa proximité dans la métropole et c'est un métier que je voulais faire après le lycée mais je n'ai pas eu l'occasion et c'est le métier qui répondrait le mieux à mes attentes personnelles aujourd'hui", "./source/image/users/othmane", "J'en ai pas", "https://github.com/Othmane-Khiter", "http://moncvfaitmalaucoeur.com"),
    new Wilders("Quentin", "Macquart", "22/04/1994", 1994, 04, 22, "Oui, deux chats", "Osaka et Romy", "Oyakodron", "Je commande un flex-wrap poulet bacon", "Le gaming et le sport", "Le remote", "J'ai intégré la Wild parce que c'est rose flashy et pour ne plus avoir de limite", "./source/image/users/quentin", "https://fr.linkedin.com/in/quentin-macquart-418934b1", "https://github.com/Quentin-Macquart"),
    new Wilders("Guillaume", "Desmis", "12/05/1979", 1979, 05, 12, "Non", "Aucun", "Pizza", "Wild Wild West", "Musique, sport", "Tout sauf le code", "J'ai intégré la Wild pour devenir développeur suite à cet adage : Je dev, je feignasse!", "./source/image/users/guillaume", "www.linkedin.com/in/guillaumedesmis5962", "https://github.com/Gui5962", "www.linkedin.com/in/guillaumedesmis5962"),
    new Wilders("Caroline", "Copy-Denhez", "19/06/1992", 1992, 06, 19, "Oui, 3 chats", "Olympe, Ikyu et Lucky", "La nourriture en général...", "Je ne suis pas à l'aise en chaussure", "Dessiner, me balader, écouter de la musique, lire, passer du temps avec ma fille et mon amoureux", "Graphisme", "La pédagogie de la Wild me correspond a 100%, et je souhaite devenir développeuse pour compléter mes compétences et avoir la double casquette création/développement", "./source/image/users/caroline", "https://www.linkedin.com/in/caroline-copy-denhez-00b9aab9/", "https://github.com/Caroline-CD", "https://www.linkedin.com/in/caroline-copy-denhez-00b9aab9/"),
    new Wilders("Marion", "Grolleau", "27/11/1990", 1990, 11, 27, "Oui, un chat et un chien", "Arizona et Rio", "Le poulet au curry", "Je sais jongler à 3 balles!", "Cinéma, concerts, festival, jeux de sociétés, sport", "Sport, handicap, associatif, évènementiel", "J'ai intégré la Wild pour acquérir de nouvelles compétences et souhaite devenir développeuse car le monde de la tech m'intéresse, et c'est le métier qui semble me convenir le mieux", "./source/image/users/marion", "www.linkedin.com/in/mariongrolleau", "https://github.com/Mariion-62", "www.linkedin.com/in/mariongrolleau"),
    new Wilders("Franck", "Biz", "01/12/1984", 1984, 12, 01, "Non", "Aucun", "Beefsteak frite", "Vers l'infini et au delà!", "Bricolage, collection de figurine, gaming", "HTML, CSS, JS, REACT, Node.JS, PHP", "Je souhaite devenir développeur par passion, et j'ai intégré la Wild pour le suivi des élèves", "./source/image/users/franck", "https://www.linkedin.com/in/bizzfranck", "https://github.com/Franck59840", "https://www.linkedin.com/in/bizzfranck"),
    new Wilders("Nacyme", "Gallel", "02/12/1992", 1992, 12, 02, "Oui, un chat et une tortue", "Mimolette et Slim", "La Mloukhia", "J'ai déjà mangé une raclette en été", "Jeux vidéo, manga, cinéma, développer", "J'suis chaud à Tétris", "J'ai intégré la Wild pour être développeur car je pense que c'est un métier qui me correspond plus que ce que j'ai fait précedemment", "./source/image/users/nacyme", "www.linkedin.com/in/NacymeG", "https://github.com/NacymeG", "www.linkedin.com/in/NacymeG"),
    new Wilders("Héloïse", "Ferla", "14/07/1992", 1992, 07, 14, "Oui, un chien", "Swag", "Couscous", "Graouuuu!", "Musique, piano, randonnées, nature, biologie", "Pédagogie, recherche, html, css, javascript", "J'ai intégré la Wild par passion pour le métier de développeur", "./source/image/users/heloise", "https://www.linkedin.com/in/h%C3%A9lo%C3%AFseferla/", "https://github.com/HeloiseFerla", "https://www.linkedin.com/in/h%C3%A9lo%C3%AFseferla/"),
    new Wilders("Sonia", "Benoumeur", "05/11/1992", 1992, 11, 05, "Non", "Aucun", "Sushi", "La bienveillance", "Les échecs, les jeux vidéo", "Je ne sais pas", "J'ai intégré la Wild pour avoir un suivi en présentiel afin de devenir développeur web et concevoir des sites qui me plaise", "./source/image/users/sonia", "http://linkedin.com/in/sonia-benoumeur-357838221", "https://github.com/Sonya092", "http://linkedin.com/in/sonia-benoumeur-357838221"),
    new Wilders("Claire", "Delaleau", "24/11/1986", 1986, 11, 24, "Oui, un chien", "Martin", "Carbonnade Flamande", "Mes belles chaussettes", "Musique, randonées", "Ma curiosité dans la musique", "Je suis a la Wild car je voulais une formation courte où on allie pratique et théorie tout de suite, et je souhaite devenir développeuse pour la diversité et l'évolution dans le secteur qui pousse a se réinventer régulièrement, ainsi que pour avoir la possibilité d'aider les gens/entreprises autrement", "./source/image/users/claire", "www.linkedin.com/in/claire-delaleau-380b03206", "https://github.com/clairedelaleau", "www.linkedin.com/in/claire-delaleau-380b03206"),
    new Wilders("Victor", "Morel", "31/07/1993", 1993, 07, 31, "Oui, deux chats", "Aya et Taz", "Tout sauf la viande", "Aucun", "Djing, informatique, cuisine, dessin, bricolage", "Djing, informatique, cuisine, dessin, bricolage", "J'ai intégré la Wild pour leur approche pédagogique et souhaite devenir développeur car c'est une passion depuis tout petit", "./source/image/users/victore", "https://images-na.ssl-images-amazon.com/images/I/71HxmP2uhUL.jpg", "https://github.com/Morel-Victor", "https://images-na.ssl-images-amazon.com/images/I/71HxmP2uhUL.jpg"),
    new Wilders("Bertrand", "Briset", "12/05/1981", 1981, 05, 12, "Non", "Aucun", "Lapin + Kluski", "'Wild things' Jimi Hendrix", "Musique, SF", "Droit social, logistique", "J'ai intégré la Wild car les chaussettes c'est super! Et je souhaite être développeur pour la diversité du métier, et que c'est un domaine où il faut être curieux", "./source/image/users/bertrand", "https://www.linkedin.com/in/bertrand-briset-809608b4/", "https://github.com/BBriset", "https://www.linkedin.com/in/bertrand-briset-809608b4/"),
    new Wilders("Jonathan", "Guillot", "14/04/1987", 1987, 04, 14, "Non", "Aucun", "Lasagnes", "Coder en chaussettes!", "Jeux vidéo, anime, sport", "Bricolage, décoration", "Je suis entré à la Wild pour la proximité avec les camarades et le formateur, et je souhaite être développeur pour changer de vie et avoir un nouveau boulot dans un domaine qui me passionne", "./source/image/users/jonathan", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/T%27choupi_%28cropped%29.jpg/1200px-T%27choupi_%28cropped%29.jpg", "https://github.com/John-athan14", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/T%27choupi_%28cropped%29.jpg/1200px-T%27choupi_%28cropped%29.jpg"),
    new Wilders("Pierre", "Goemans", "30/05/1994", 1994, 05, 30, "Oui, deux chat", "Knacky et Houlala", "Lasagnes", "", "Jeux vidéo, impression 3D, sport", "informatique, Serie, Film", "Mon projet avec la Wild c'est de devenir professionnel et plus amateur", "./source/image/users/pierre", "https://www.linkedin.com/in/pierre-goemans-b61307105/", "https://github.com/PierreGoe", "https://github.com/PierreGoe"),
    new Wilders("Hacene", "Hamroune", "12/03/1995", 1995, 03, 12, "Oui, un chaton", "Winnie", "Couscous", "Il dit qu'il en a pas...on demandera à Loic ", "Boxe, football, basketball, running, fifa", "La restauration (snacking bien sûr), sécurité, dev web", "J'ai intégré la Wild pour me permettre d'acquérir les compétences nécéssaires du métier de developpeur web et c'est un métier qui couvre beaucoup de domaine et qui permet de travailler à son compte, donc etre libre", "./source/image/users/hacene", "https://www.linkedin.com/in/hacenehamroune/", "https://github.com/Hacene010", "https://www.linkedin.com/in/hacenehamroune/"),
    new Wilders("Loïc", "Brassart", "02/05/1986", 1986, 05, 02, "Oui, deux chats", "Ithaque et Pixel", "Pâtes carbonara", "Un jour, on étant en vacances à la campagne et on a fêté l'anniversaire d'une copine dans une pâture avec un troupeau de vaches. Quand on a allumé le gateau, le taureau qui était avec les vaches s'est montré un poil nerveux (comprendre: il nous a chargé) et on a tous tapé un sprint pour sortir avant de mourir piétinés. Ma grande fierté? J'ai sauté la barrière qui délimitait le champ sans même la toucher tel un petit cabri terrifié. Mon grand regret? On a jamais récupéré le gâteau é_è", "Piano, code, jeux vidéo (RPG), jeux de rôle, chant, travail du cuir, bricolage, ...", "Cf mes hobbys? ...Nan, pas forcément, y'a des hobbys dans lesquels je suis nul à chier!", "J'ai intégré la Wild pour entrainer des légions de Petits Scarabées JS lobotomisés et obéissant à mes ordres, afin de conduire un putsch sur Euratech d'ici deux ou trois sessions. Et ... j'ai pas fait exprès d'être dev. Si on vous demande, merci de dire que c'est parce que je suis tombé dans la marmite quand j'étais petit", "./source/image/users/loic", "https://www.linkedin.com/in/loic-brassart-a106a555/", "https://github.com/LoicBrassart", "https://www.linkedin.com/in/loic-brassart-a106a555/")
]

function createWildersCard(name, id) {
    const cardContainer = document.querySelector(".card-container");

    const cardBody = document.createElement("article");
    cardBody.setAttribute("class", "card");
    cardContainer.appendChild(cardBody);

    const cardFront = document.createElement("div");
    cardFront.setAttribute("class", "front");
    // content to add

    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", wildersInfos[id].picureProfile + "-min.jpg");
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
    githubLink.setAttribute("href", wildersInfos[id].social.gitHub);
    icones.appendChild(githubLink);

    const gitHubLogo = document.createElement("img");
    gitHubLogo.setAttribute(
        "src",
        "https://img.icons8.com/material-outlined/30/000000/github.png"
    );
    githubLink.appendChild(gitHubLogo);

    const linkedinLink = document.createElement("a");
    linkedinLink.setAttribute("href", wildersInfos[id].social.linkedin);
    icones.appendChild(linkedinLink);
    const linkedinLogo = document.createElement("img");
    linkedinLogo.setAttribute(
        "src",
        "https://img.icons8.com/material-outlined/30/000000/linkedin--v1.png"
    );

    linkedinLink.appendChild(linkedinLogo);
    const cvLink = document.createElement("a");
    cvLink.setAttribute("href", wildersInfos[id].social.cvUser);
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
    profileImage.style.backgroundImage = `url('${wildersInfos[id].picureProfile}.jpg')`;
    modalContent.appendChild(profileImage);
    // create content for users info
    const modalUserInfos = document.createElement('div')
    modalUserInfos.setAttribute("class", "modalUserInfos")
    modalContent.appendChild(modalUserInfos);
    const UserInfoInModal = document.querySelector(".modalUserInfos")
    // Name Users
    const titleModal = document.createElement("p");
    titleModal.innerHTML = `<span class = titleAnswer>Wilder</span>${wildersInfos[id].name}`;
    UserInfoInModal.appendChild(titleModal);
    // Age User
    const ageUser = document.createElement("p");
    ageUser.innerHTML = `<span class = titleAnswer>Age</span>${wildersInfos[id].age()}`;
    UserInfoInModal.appendChild(ageUser);
    // birthday User
    const birthdayUser = document.createElement("p");
    birthdayUser.innerHTML = `<span class = titleAnswer>Date de naissance</span>${wildersInfos[id].birthday}`;
    UserInfoInModal.appendChild(birthdayUser);
    // pets User
    const petsUser = document.createElement("p");
    petsUser.innerHTML = `<span class = titleAnswer>Animal </span>${wildersInfos[id].pets}`;
    UserInfoInModal.appendChild(petsUser);
    // name of pets User
    const namePetsUser = document.createElement("p");
    namePetsUser.innerHTML = `<span class = titleAnswer>Nom de son animal </span>${wildersInfos[id].nameOfPets}`;
    UserInfoInModal.appendChild(namePetsUser);
    // favorite foods User
    const favoriteUserFood = document.createElement("p");
    favoriteUserFood.innerHTML = `<span class = titleAnswer>Son plat préféré </span>${wildersInfos[id].favoritFood}`;
    UserInfoInModal.appendChild(favoriteUserFood);
    // wild side User
    const wildSideUser = document.createElement("p");
    wildSideUser.innerHTML = `<span class = titleAnswer>Son cote Wild </span>${wildersInfos[id].wildSide}`;
    UserInfoInModal.appendChild(wildSideUser);
    // hobby User
    const hobbyUser = document.createElement("p");
    hobbyUser.innerHTML = `<span class = titleAnswer>Hobby </span>${wildersInfos[id].hobby}`;
    UserInfoInModal.appendChild(hobbyUser);
    // skills User
    const skillsUser = document.createElement("p");
    skillsUser.innerHTML = `<span class = titleAnswer>Compétences </span>${wildersInfos[id].skills}`;
    UserInfoInModal.appendChild(skillsUser);
    // motivation User
    const motivationUser = document.createElement("p");
    motivationUser.innerHTML = `<span class = titleAnswer>Motivation </span>${wildersInfos[id].motivation}`;
    UserInfoInModal.appendChild(motivationUser);
    // creat Div for Icones
    const divIcones = document.createElement("div");
    divIcones.setAttribute("class", "containerIcone")

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
const header = document.querySelector('header');
const btnFlame = document.createElement('button');
btnFlame.setAttribute("class", "flamebtn");
btnFlame.setAttribute("id", "flamebtnid");
btnFlame.textContent = "";
header.appendChild(btnFlame);



btnFlame.addEventListener('click', function() {

    const alldiv = document.querySelectorAll('div')
    for (let i = 0; i < allBtn.length; i++) {
        alldiv[i].style.backgroundImage = `url('https://c.tenor.com/jnyLvpwBKOUAAAAi/fireplace-fire.gif')`;
    }

})