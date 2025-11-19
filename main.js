//Pokémon array
pokemon = [
  {
    natdex: "001",
    name: "Bulbasaur",
    type1: "grass",
    type2: "poison",
    imagesrc: "assets/gen-i/001Bulbasaur.png",
  },
  {
    natdex: "002",
    name: "Ivysaur",
    type1: "grass",
    type2: "poison",
    imagesrc: "assets/gen-i/002Ivysaur.png",
  },
  {
    natdex: "003",
    name: "Venusaur",
    type1: "grass",
    type2: "poison",
    imagesrc: "assets/gen-i/003Venusaur.png",
  },
  {
    natdex: "004",
    name: "Charmander",
    type1: "fire",
    type2: "",
    imagesrc: "assets/gen-i/004Charmander.png",
  },
  {
    natdex: "005",
    name: "Charmeleon",
    type1: "fire",
    type2: "",
    imagesrc: "assets/gen-i/005Charmeleon.png",
  },
  {
    natdex: "006",
    name: "Charizard",
    type1: "fire",
    type2: "flying",
    imagesrc: "assets/gen-i/006Charizard.png",
  },
  {
    natdex: "007",
    name: "Squirtle",
    type1: "water",
    type2: "",
    imagesrc: "assets/gen-i/007Squirtle.png",
  },
  {
    natdex: "008",
    name: "Wartortle",
    type1: "water",
    type2: "",
    imagesrc: "assets/gen-i/008Wartortle.png",
  },
  {
    natdex: "009",
    name: "Blastoise",
    type1: "water",
    type2: "",
    imagesrc: "assets/gen-i/009Blastoise.png",
  },
  {
    natdex: "010",
    name: "Caterpie",
    type1: "bug",
    type2: "",
    imagesrc: "assets/gen-i/010Caterpie.png",
  },
  {
    natdex: "011",
    name: "Metapod",
    type1: "bug",
    type2: "",
    imagesrc: "assets/gen-i/011Metapod.png",
  },
  {
    natdex: "012",
    name: "Butterfree",
    type1: "bug",
    type2: "flying",
    imagesrc: "assets/gen-i/012Butterfree.png",
  },
  {
    natdex: "013",
    name: "Weedle",
    type1: "",
    type2: "",
    imagesrc: "assets/gen-i/013Weedle.png",
  },
  {
    natdex: "014",
    name: "Kakuna",
    type1: "",
    type2: "",
    imagesrc: "assets/gen-i/014Kakuna.png",
  },
];

//Background color geneator
function getBackground(type1, type2) {
  if (!type2) {
    return `var(--${type1})`;
  }
  return `linear-gradient(var(--${type1}) 0%, var(--${type2}) 100%)`;
}

// Dex card generators

const dexContainer = document.getElementById("dex");

pokemon.forEach((p) => {
  const bg = getBackground(p.type1, p.type2);

  const card = document.createElement("div");
  card.classList.add("mon");
  card.style.background = bg;

  card.innerHTML = `
    <img src="${p.imagesrc}" alt ="${p.name}">
    <br>${p.natdex} ${p.name}
    `;

  dexContainer.appendChild(card);
});

//old generator work
// for (var i = 0; i < pokemon.length; i++) {
//   console.log(pokemon[i].natdex)
// }

/* <div class="mon grass-poison"><img src="assets/gen-i/001Bulbasaur.png" alt="Bulbasaur"><br>001 Bulbasaur</div> */
