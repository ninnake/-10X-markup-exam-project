//function selectIcon(el, group) {
//document
//.querySelectorAll(group)
//.forEach((box) => box.classList.remove("selected"));

//el.classList.add("selected");
//}
const sections = document.querySelectorAll(".slider-section");

sections.forEach((section) => {
  const cataloge = section.querySelector(".cataloge");
  const arrows = section.querySelectorAll(".list-title-line ul li img");

  if (!cataloge || arrows.length < 2) return;

  const leftArrow = arrows[0];
  const rightArrow = arrows[1];

  const card = cataloge.querySelector("li");
  const gap = 10;
  const scrollAmount = card.offsetWidth + gap;

  rightArrow.addEventListener("click", () => {
    cataloge.scrollLeft += scrollAmount;
  });

  leftArrow.addEventListener("click", () => {
    cataloge.scrollLeft -= scrollAmount;
  });
});
////////
//////
//////
const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const player = document.querySelector(".player");
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    player.classList.add("active");
  } else {
    audio.pause();
    player.classList.remove("active");
  }
});
//for search section color rendomize

const colors = [
  " #006450",
  "#1e3264",
  "#503750",
  "#8d67ab",
  "#0d73ec",
  "#27856a",
  "#e8115b",
  "#e41d63",
  "#eb1e32",
  "#777777",
  "#d84000",
  "#537aa1",
  "#148a08",
  "#e91429",
  "#ba5d07",
  "#b02897",
];

document.querySelectorAll(".color-box").forEach((box) => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  box.style.backgroundColor = randomColor;
  box.style.setProperty("--card-color", randomColor);
});
