const main = document.querySelector(".bars");
const new_array = document.querySelector(".new_array");
const speed = document.querySelector(".speed");
const quantity = document.querySelector(".quantity");
var arr_size = 100;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// const display = async (n) => {
//   const elements = document.querySelectorAll('.bar');
//   let midL = n/2, midR = midL + 1;
//   console.log(n);
//   while(midL >= 0 && midR < n) {
//     await sleep(1);
//     if(elements[midL] !== undefined)
//       elements[midL].style.visibility = "visible";
//     if(elements[midR] !== undefined)
//       elements[midR].style.visibility = "visible";
//     midL--;
//     midR++;
//   }
//   if(midL >= 0 && elements[midL] !== undefined) {
//     elements[midL].style.visibility = "visible";
//   }
//   if(midR < n && elements[midR] !== undefined) {
//     elements[midR].style.visibility = "visible";
//   }
// }

const generateArray = (n) => {
  arr_size = n;
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
    // element.style.visibility = "hidden";
    element.style.height = parseInt(height) + "px";
    element.style.width = parseFloat(width) + "%";
    main.appendChild(element);
  });

  // display(n);
};

quantity.addEventListener("input", () => generateArray(quantity.value));
new_array.addEventListener("click", () => generateArray(arr_size));
