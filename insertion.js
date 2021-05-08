const insertion = document.querySelector('.insertion')
const speed = document.querySelector('.speed');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const swap = (e1, e2) => {
    const bar1 = window.getComputedStyle(e1);
    const bar2 = window.getComputedStyle(e2);

    var h1 = bar1.getPropertyValue("height");
    var h2 = bar2.getPropertyValue("height");

    e1.style.height = h2;
    e2.style.height = h1;
}

const INT = (px) => {
    return parseInt(px, 10);
}

/* TODO: revise about async-await */

const sort = async() => {
    const array = document.querySelectorAll('.bar')
    const n = array.length;
    
    for(let i = 0; i < n; ++i) {
        let j = i;

        if(i == 0) {
            array[0].style.backgroundColor = "green";
            continue;
        }
        
        array[i].style.backgroundColor = "red";

        var previousElement = window.getComputedStyle(array[j - 1]).getPropertyValue("height");
        var currentElement = window.getComputedStyle(array[j]).getPropertyValue("height");
        while(INT(previousElement) > INT(currentElement)) {
            /* show current pairs */
            array[j].style.backgroundColor = "red";
            array[j - 1].style.backgroundColor = "red";

            await sleep(speed.value);
            
            swap(array[j], array[j - 1]);

            /* check done */
            array[j].style.backgroundColor = "green";
            array[j - 1].style.backgroundColor = "green";

            --j;
            if(j - 1 >= 0) {
                previousElement = window.getComputedStyle(array[j - 1]).getPropertyValue("height");
                currentElement = window.getComputedStyle(array[j]).getPropertyValue("height");
            }
            else break;
        }
    }
}

insertion.addEventListener('click', sort);