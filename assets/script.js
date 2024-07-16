var toggleOpen = document.getElementById("toggleOpen");
var toggleClose = document.getElementById("toggleClose");
var collapseMenu = document.getElementById("collapseMenu");

function handleClick() {
  if (collapseMenu.style.display === "block") {
    collapseMenu.style.display = "none";
  } else {
    collapseMenu.style.display = "block";
  }
}

toggleOpen.addEventListener("click", handleClick);
toggleClose.addEventListener("click", handleClick);

let sr = ScrollReveal({
  distance: "150px",
  delay: 500,
  duration: 1700,
});

sr.reveal(".kartya, .cards", {
  origin: "bottom",
});

sr.reveal(".leiras", {
  origin: "left",
});
