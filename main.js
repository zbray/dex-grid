//Pokémon array
// Gen 1 - All 151 Pokémon
const pokemon = [
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
    type1: "bug",
    type2: "poison",
    imagesrc: "assets/gen-i/013Weedle.png",
  },
  {
    natdex: "014",
    name: "Kakuna",
    type1: "bug",
    type2: "poison",
    imagesrc: "assets/gen-i/014Kakuna.png",
  },
  {
    natdex: "015",
    name: "Beedrill",
    type1: "bug",
    type2: "poison",
    imagesrc: "assets/gen-i/015Beedrill.png",
  },
  {
    natdex: "016",
    name: "Pidgey",
    type1: "normal",
    type2: "flying",
    imagesrc: "assets/gen-i/016Pidgey.png",
  },
  {
    natdex: "017",
    name: "Pidgeotto",
    type1: "normal",
    type2: "flying",
    imagesrc: "assets/gen-i/017Pidgeotto.png",
  },
  {
    natdex: "018",
    name: "Pidgeot",
    type1: "normal",
    type2: "flying",
    imagesrc: "assets/gen-i/018Pidgeot.png",
  },
  {
    natdex: "019",
    name: "Rattata",
    type1: "normal",
    type2: "",
    imagesrc: "assets/gen-i/019Rattata.png",
  },
  {
    natdex: "020",
    name: "Raticate",
    type1: "normal",
    type2: "",
    imagesrc: "assets/gen-i/020Raticate.png",
  },
  {
    natdex: "021",
    name: "Spearow",
    type1: "normal",
    type2: "flying",
    imagesrc: "assets/gen-i/021Spearow.png",
  },
  {
    natdex: "022",
    name: "Fearow",
    type1: "normal",
    type2: "flying",
    imagesrc: "assets/gen-i/022Fearow.png",
  },
  {
    natdex: "023",
    name: "Ekans",
    type1: "poison",
    type2: "",
    imagesrc: "assets/gen-i/023Ekans.png",
  },
  {
    natdex: "024",
    name: "Arbok",
    type1: "poison",
    type2: "",
    imagesrc: "assets/gen-i/024Arbok.png",
  },
  {
    natdex: "025",
    name: "Pikachu",
    type1: "electric",
    type2: "",
    imagesrc: "assets/gen-i/025Pikachu.png",
  },
  {
    natdex: "026",
    name: "Raichu",
    type1: "electric",
    type2: "",
    imagesrc: "assets/gen-i/026Raichu.png",
  },
  {
    natdex: "027",
    name: "Sandshrew",
    type1: "ground",
    type2: "",
    imagesrc: "assets/gen-i/027Sandshrew.png",
  },
  {
    natdex: "028",
    name: "Sandslash",
    type1: "ground",
    type2: "",
    imagesrc: "assets/gen-i/028Sandslash.png",
  },
  {
    natdex: "029",
    name: "Nidoran♀",
    type1: "poison",
    type2: "",
    imagesrc: "assets/gen-i/029Nidoran.png",
  },
  {
    natdex: "030",
    name: "Nidorina",
    type1: "poison",
    type2: "",
    imagesrc: "assets/gen-i/030Nidorina.png",
  },
  {
    natdex: "031",
    name: "Nidoqueen",
    type1: "poison",
    type2: "ground",
    imagesrc: "assets/gen-i/031Nidoqueen.png",
  },
  {
    natdex: "032",
    name: "Nidoran♂",
    type1: "poison",
    type2: "",
    imagesrc: "assets/gen-i/032Nidoran.png",
  },
  {
    natdex: "033",
    name: "Nidorino",
    type1: "poison",
    type2: "",
    imagesrc: "assets/gen-i/033Nidorino.png",
  },
  {
    natdex: "034",
    name: "Nidoking",
    type1: "poison",
    type2: "ground",
    imagesrc: "assets/gen-i/034Nidoking.png",
  },
  {
    natdex: "035",
    name: "Clefairy",
    type1: "fairy",
    type2: "",
    imagesrc: "assets/gen-i/035Clefairy.png",
  },
  {
    natdex: "036",
    name: "Clefable",
    type1: "fairy",
    type2: "",
    imagesrc: "assets/gen-i/036Clefable.png",
  },
  {
    natdex: "037",
    name: "Vulpix",
    type1: "fire",
    type2: "",
    imagesrc: "assets/gen-i/037Vulpix.png",
  },
  {
    natdex: "038",
    name: "Ninetales",
    type1: "fire",
    type2: "",
    imagesrc: "assets/gen-i/038Ninetales.png",
  },
  {
    natdex: "039",
    name: "Jigglypuff",
    type1: "normal",
    type2: "fairy",
    imagesrc: "assets/gen-i/039Jigglypuff.png",
  },
  {
    natdex: "040",
    name: "Wigglytuff",
    type1: "normal",
    type2: "fairy",
    imagesrc: "assets/gen-i/040Wigglytuff.png",
  },
  {
    natdex: "041",
    name: "Zubat",
    type1: "poison",
    type2: "flying",
    imagesrc: "assets/gen-i/041Zubat.png",
  },
  {
    natdex: "042",
    name: "Golbat",
    type1: "poison",
    type2: "flying",
    imagesrc: "assets/gen-i/042Golbat.png",
  },
  {
    natdex: "043",
    name: "Oddish",
    type1: "grass",
    type2: "poison",
    imagesrc: "assets/gen-i/043Oddish.png",
  },
  {
    natdex: "044",
    name: "Gloom",
    type1: "grass",
    type2: "poison",
    imagesrc: "assets/gen-i/044Gloom.png",
  },
  {
    natdex: "045",
    name: "Vileplume",
    type1: "grass",
    type2: "poison",
    imagesrc: "assets/gen-i/045Vileplume.png",
  },
  {
    natdex: "046",
    name: "Paras",
    type1: "bug",
    type2: "grass",
    imagesrc: "assets/gen-i/046Paras.png",
  },
  {
    natdex: "047",
    name: "Parasect",
    type1: "bug",
    type2: "grass",
    imagesrc: "assets/gen-i/047Parasect.png",
  },
  {
    natdex: "048",
    name: "Venonat",
    type1: "bug",
    type2: "poison",
    imagesrc: "assets/gen-i/048Venonat.png",
  },
  {
    natdex: "049",
    name: "Venomoth",
    type1: "bug",
    type2: "poison",
    imagesrc: "assets/gen-i/049Venomoth.png",
  },
  {
    natdex: "050",
    name: "Diglett",
    type1: "ground",
    type2: "",
    imagesrc: "assets/gen-i/050Diglett.png",
  },
  {
    natdex: "051",
    name: "Dugtrio",
    type1: "ground",
    type2: "",
    imagesrc: "assets/gen-i/051Dugtrio.png",
  },
  {
    natdex: "052",
    name: "Meowth",
    type1: "normal",
    type2: "",
    imagesrc: "assets/gen-i/052Meowth.png",
  },
  {
    natdex: "053",
    name: "Persian",
    type1: "normal",
    type2: "",
    imagesrc: "assets/gen-i/053Persian.png",
  },
  {
    natdex: "054",
    name: "Psyduck",
    type1: "water",
    type2: "",
    imagesrc: "assets/gen-i/054Psyduck.png",
  },
  {
    natdex: "055",
    name: "Golduck",
    type1: "water",
    type2: "",
    imagesrc: "assets/gen-i/055Golduck.png",
  },
  {
    natdex: "056",
    name: "Mankey",
    type1: "fighting",
    type2: "",
    imagesrc: "assets/gen-i/056Mankey.png",
  },
  {
    natdex: "057",
    name: "Primeape",
    type1: "fighting",
    type2: "",
    imagesrc: "assets/gen-i/057Primeape.png",
  },
  {
    natdex: "058",
    name: "Growlithe",
    type1: "fire",
    type2: "",
    imagesrc: "assets/gen-i/058Growlithe.png",
  },
  {
    natdex: "059",
    name: "Arcanine",
    type1: "fire",
    type2: "",
    imagesrc: "assets/gen-i/059Arcanine.png",
  },
  {
    natdex: "060",
    name: "Poliwag",
    type1: "water",
    type2: "",
    imagesrc: "assets/gen-i/060Poliwag.png",
  },
  {
    natdex: "061",
    name: "Poliwhirl",
    type1: "water",
    type2: "",
    imagesrc: "assets/gen-i/061Poliwhirl.png",
  },
  {
    natdex: "062",
    name: "Poliwrath",
    type1: "water",
    type2: "fighting",
    imagesrc: "assets/gen-i/062Poliwrath.png",
  },
  {
    natdex: "063",
    name: "Abra",
    type1: "psychic",
    type2: "",
    imagesrc: "assets/gen-i/063Abra.png",
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
    <div class="monInfo">
    <span class="monNumber">${p.natdex}</span>
    <span class="monName">${p.name}</span>
    </div>
    `;

  dexContainer.appendChild(card);
});

//old generator work
// for (var i = 0; i < pokemon.length; i++) {
//   console.log(pokemon[i].natdex)
// }

/* <div class="mon grass-poison"><img src="assets/gen-i/001Bulbasaur.png" alt="Bulbasaur"><br>001 Bulbasaur</div> */

// Left to Do:

// Error handling for images
