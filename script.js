function selectIcon(el, group) {
  document
    .querySelectorAll(group)
    .forEach((box) => box.classList.remove("selected"));

  el.classList.add("selected");
}
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
