const selection = document.querySelector('.selection')
const speed = document.querySelector('.speed');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const swap = (e1, e2) => {
    const bar1 = window.getComputedStyle(e1);
    const bar2 = window.getComputedStyle(e2);

    var h1 = bar1.getPropertyValue("height");
    var h2 = bar2.getPropertyValue("height");

    const H1 = parseInt(h1, 10);
    const H2 = parseInt(h2, 10);
    
    if(H1 > H2) {
        e1.style.height = h2;
        e2.style.height = h1;
    }
}

const INT = (px) => {
    return parseInt(px, 10);
}

/* TODO: revise about async-await */

const sort = async() => {
    const array = document.querySelectorAll('.bar')
    const n = array.length;
    
    for(let i = 0; i < n; ++i) {
        let minimumIndex = i;
        let minimumValue = INT(window.getComputedStyle(array[i]).getPropertyValue("height"));

        for(let j = i; j < n; ++j) {
            /* show current pairs */
            array[j].style.backgroundColor = "red";
            array[minimumIndex].style.backgroundColor = "red";
            
            await sleep(spped.value);
            let currentValue = INT(window.getComputedStyle(array[j]).getPropertyValue("height"));
            if(currentValue < minimumValue) {
                minimumIndex = j;
                minimumValue = currentValue;
            }

            /* check done */
            array[j].style.backgroundColor = "pink";
            array[minimumIndex].style.backgroundColor = "pink";
        }
        swap(array[i], array[minimumIndex]);
        array[i].style.backgroundColor = "green";
    }
}

selection.addEventListener('click', sort);