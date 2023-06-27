// let numere =[3,4,9];
// numere.push(7);
// console.log(numere);
// numere[numere.length]=13;
// console.log(numere);
// //3,4,9,7,13
// numere.splice(3,0,14);
// console.log(numere);


const cardTypes = ["clubs", "diamonds", "hearts", "spades"];
let pachet = {
  clubs: [], //2,3,4,
  diamonds: [],
  heats: [],
  spades: [],
};
let score = 0;
let vecheaCarte = 0;

function adaugaCartiInPachet(nrPachete = 1) {
  for (let i = 0; 1 < cardTypes.lenght; i++) {
    // index card type
    i; //index(0,1,2,3)
    // cardTypes[i]//'clubs', ...

    for (let j = 2; j <= 14; j++) {
      //card number}
      pachet[cardTypes[i]].push(j);
      //  pachet [i[j]];;// pachet [0[2]]
    }
  }
  console.log(pachet);
}

function incarcare() {
    // genereaza pachete
    adaugaCartiInPachet();
  // adaugare carte noua
  nouaCarte = schimbaCarte();
  //ar urma comparatia
  vecheaCarte = nouaCarte;
  // setare scor zero
  afisazaScor();
}
function afisazaScor() {
  const divScore = document.getElementById("score");
  const spanScore = divScore.getElementsByTagName("span")[0];
  
    spanScore.textContent = score;
}

   function showFace(happy){
    const divIdToShow ='face -'+ (happy ? 'happy' : 'sad');
    const divIdToHide ='face -'+ (!happy ? 'happy' : 'sad');
     document.getElementById(divIdToShow).style.display = 'block ';
     document.getElementById(divIdToHide).style.display = 'none ';
   }

function schimbaCarte() {
    const indexType = Math.floor(Math.random() * 4); //[0:4);
    const cardNumber = Math.floor(Math.random() * 13 + 2); // [0:14];[2:14)
    const pozitie= pachet[cardTypes[indexType]].indexOf(cardNumber);
    const fileName = "cards/" + cardTypes[indexType] + "_" + cardNumber + ".svg";
  if(pozitie === -1){
      schimbaCarte();
      return;
    }
    pachet[cardTypes[indexType]].splice(pozitie,1);
    //    lastCardNumber=cardNumber;

  const imgElement = document.querySelector("#card > img");
  imgElement.setAttribute("src", fileName);

  return cardNumber;
}

function higher() {
  nouaCarte = schimbaCarte();
  if (typeof nouaCarte !== "number") return;

  vecheaCarte = nouaCarte;
  if (nouaCarte > vecheaCarte) {
    score++;
    showFace(true);
    afisazaScor();
  } else {
    score--;showFace(false);
    afisazaScor();
  }
  vecheaCarte = nouaCarte;
}
const lower = function () {
  nouaCarte = schimbaCarte();
  if (typeof nouaCarte !== "number") return;

  vecheaCarte = nouaCarte;
  if (nouaCarte <= vecheaCarte) {
    score++;
    afisazaScor();
  } else {
    score--;
    afisazaScor();
  }
  vecheaCarte = nouaCarte;
};

document.addEventListener("DOMContentLoaded", incarcare);
