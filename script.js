function getRandomColor() {
  let redColorValue = Math.ceil(0 + Math.random() * 255);
  let greenColorValue = Math.ceil(0 + Math.random() * 255);
  let blueColorValue = Math.ceil(0 + Math.random() * 255);
  return `rgb(${redColorValue},${greenColorValue},${blueColorValue})`;
}

let button = document.getElementById("btn");
button.addEventListener("click", () => {
    let container = document.getElementsByClassName("container");
    Array.from(container).forEach((e) => {
      e.style.backgroundColor = getRandomColor();
    });
  document.body.style.backgroundColor = getRandomColor();
}
);