const bed = document.getElementById("bed");
const tv = document.getElementById("tv");
const fridge = document.getElementById("fridge");
const mirror = document.getElementById("mirror");
const dialogueBox = document.getElementById("game-dialogue");

function updateDialogue(text) {
  dialogueBox.innerText = text;
}

bed.addEventListener("click", () => {
  updateDialogue("Frisk lies down on the bed, feeling cozy.");
});

tv.addEventListener("click", () => {
  updateDialogue("The TV is showing static... Maybe it's broken.");
});

fridge.addEventListener("click", () => {
  updateDialogue("Frisk opens the fridge. It's full of vegetables.");
});

mirror.addEventListener("click", () => {
  updateDialogue("Frisk looks in the mirror and smiles at themselves.");
});
