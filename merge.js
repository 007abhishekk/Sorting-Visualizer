const merge = document.querySelector(".merge");
const speed = document.querySelector(".speed");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const INT = (px) => {
  return parseInt(px, 10);
};

const sort = async () => {
  const array = document.querySelectorAll(".bar");
  let n = array.length;

  const mark = (l, r, color) => {
    for (let i = l; i <= r; ++i) {
      array[i].style.backgroundColor = color;
    }
  };

  const merge = async (l_left, r_left, l_right, r_right) => {
    let L = l_left,
      R = l_right;

    mark(l_left, r_right, "blue");
    for (; L <= r_left && R <= r_right; ) {
      let leftValue = INT(
        window.getComputedStyle(array[L]).getPropertyValue("height")
      );
      let rightValue = INT(
        window.getComputedStyle(array[R]).getPropertyValue("height")
      );
      if (leftValue <= rightValue) L++;
      else {
        for (let r = R; r != L; r--) {
          array[r].style.backgroundColor = "red";
          array[r - 1].style.backgroundColor = "red";

          await sleep(speed.value);
          array[r].style.height = array[r - 1].style.height;

          array[r].style.backgroundColor = "pink";
          array[r - 1].style.backgroundColor = "pink";
        }
        array[L].style.height = parseInt(rightValue) + "px";
        L++;
        r_left++;
        R++;
      }
    }
    mark(l_left, r_right, "green");
  };

  const mergeSort = async (left, right) => {
    if (left < right) {
      const mid = (left + right) >> 1;
      await mergeSort(left, mid);
      await mergeSort(mid + 1, right);
      await merge(left, mid, mid + 1, right);
    }
  };

  mergeSort(0, n - 1);
};

merge.addEventListener("click", sort);
