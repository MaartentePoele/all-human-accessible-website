// Selecteerd de button en de header
const btn = document.querySelector("button");
const header = document.querySelector("header");

// Als je op de button klikt wordt de toggleColour uitgevoerd
btn.addEventListener("click", toggleColour);

// Functie dat de class van de header veranderd
function toggleColour() {
  header.classList.toggle("header-nieuw-west-betere-kleur");
}
