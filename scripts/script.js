const btn = document.querySelector("button");
const header = document.querySelector("header");

btn.addEventListener("click", toggleColour);

function toggleColour() {
  header.classList.toggle("header-nieuw-west-betere-kleur");
}
