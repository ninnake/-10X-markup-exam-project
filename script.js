function selectIcon(el, group) {
  document
    .querySelectorAll(group)
    .forEach((box) => box.classList.remove("selected"));

  el.classList.add("selected");
}
