const quick = document.querySelector(".quick");
const speed = document.querySelector(".speed");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const swap = (e1, e2) => {
  const bar1 = window.getComputedStyle(e1);
  const bar2 = window.getComputedStyle(e2);

  var h1 = bar1.getPropertyValue("height");
  var h2 = bar2.getPropertyValue("height");

  e1.style.height = h2;
  e2.style.height = h1;
};

const INT = (px) => {
  return parseInt(px, 10);
};

/* TODO: revise about async-await */
const sort = async () => {
  const array = document.querySelectorAll(".bar");
  let n = array.length;

  const mark = (l, r, color) => {
    for (let i = l; i <= r; ++i) {
      array[i].style.backgroundColor = color;
    }
  };

  const partition = async (left, right) => {
    var pivotValue = INT(
      window.getComputedStyle(array[left]).getPropertyValue("height")
    );
    var index = right + 1;

    mark(left, right, "blue");
    for (let i = right; i > left; --i) {
      var currentValue = INT(
        window.getComputedStyle(array[i]).getPropertyValue("height")
      );
      if (currentValue > pivotValue) {
        --index;
        array[i].style.backgroundColor = "red";
        array[index].style.backgroundColor = "red";

        await sleep(speed.value);
        swap(array[i], array[index]);

        array[i].style.backgroundColor = "blue";
        array[index].style.backgroundColor = "blue";
      }
    }

    swap(array[index - 1], array[left]);
    mark(left, right, "pink");

    array[index - 1].style.backgroundColor = "green";

    return index - 1;
  };

  const quickSort = async (left, right) => {
    if (left <= right) {
      const p = await partition(left, right);
      await quickSort(left, p - 1);
      await quickSort(p + 1, right);
    }
  };

  quickSort(0, n - 1);
};

quick.addEventListener("click", sort);
