const main = document.querySelector(".bars");
const new_array = document.querySelector(".new_array");
const inserion = document.querySelector(".inserion");
const bubble = document.querySelector(".bubble");
const selection = document.querySelector(".selection");

const generateArray = () => {
  const n = 100;
  const width = 100 / n;
  const array = [];
  const divs = document.getElementById("bars");

  while (divs.firstChild) divs.removeChild(divs.firstChild);

  for (let i = 0; i < n; ++i) {
    array.push(Math.ceil(Math.random() * 500));
  }

  array.forEach((height) => {
    const element = document.createElement("div");
    element.classList.add("bar");
    element.style.height = parseInt(height) + "px";
    element.style.width = parseFloat(width) + "%";
    main.appendChild(element);
  });
};

new_array.addEventListener("click", generateArray);
