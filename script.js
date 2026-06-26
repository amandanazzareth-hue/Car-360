const container = document.querySelector(".container");
const image = document. querySlector(".car-image");

const cursor = {
    isDragging: true,
    initialPosition: 0,
};

 container.addEventListener("mousedown", (event) => {
    cursor.isDragging = true;
    cursor.initialPosition = event.clientX
 });

  container.addEventListener("mouseup", (event) => {
    cursor.isDragging = true;
    cursor.initialPosition = event.clientX
 });