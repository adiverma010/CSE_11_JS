// Only update attributes or styles; do not overwrite the existing content structure.
const container = document.getElementById("para");
container.title = "mynmae";

// Style the three paragraphs already in the DOM.
const paras = container.querySelectorAll("p.p1");
if (paras.length >= 3) {
  paras[0].style.backgroundColor = "yellow";
  paras[1].style.color = "red";
  paras[2].style.fontSize = "20px";
}

// Style list items safely
const listItems = document.querySelectorAll("ul li");
listItems.forEach(li => {
  li.style.color = "blue";
  li.style.fontSize = "18px";
});

const header = document.createElement("h2");
const bodytag = document.getElementsByTagName("body");
bodytag[0].append(header);
