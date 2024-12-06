
const draggableText = document.getElementById("draggable-text");
const changeTypographyButton = document.getElementById("change-typography");

let isDragging = false;
let offsetX, offsetY;

draggableText.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
  draggableText.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const container = document.getElementById("container");
    const rect = container.getBoundingClientRect();

    let x = e.pageX - rect.left - offsetX;
    let y = e.pageY - rect.top - offsetY;

    x = Math.max(0, Math.min(x, rect.width - draggableText.offsetWidth));
    y = Math.max(0, Math.min(y, rect.height - draggableText.offsetHeight));

    draggableText.style.left = `${x}px`;
    draggableText.style.top = `${y}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  draggableText.style.cursor = "grab";
});

let fonts = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana"];
let fontIndex = 0;

changeTypographyButton.addEventListener("click", () => {
  fontIndex = (fontIndex + 1) % fonts.length;
  draggableText.style.fontFamily = fonts[fontIndex];
});
