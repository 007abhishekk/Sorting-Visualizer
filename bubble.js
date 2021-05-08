const bubble = document.querySelector('.bubble')

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

/* TODO: revise about async-await */
/* TODO: Complete other sorting modules */
const sort = async() => {
    const array = document.querySelectorAll('.bar')
    const n = array.length;
    
    for(let i = 0; i < n; ++i) {
        for(let j = 0; j < n - 1 - i; ++j) {
            /* show current pairs */
            array[j].style.backgroundColor = "red";
            array[j + 1].style.backgroundColor = "red";
            
            await sleep(1);
            swap(array[j], array[j + 1]);
            
            /* check done */
            array[j].style.backgroundColor = "pink";
            array[j + 1].style.backgroundColor = "pink";
        }
        array[n - i - 1].style.backgroundColor = "green";
    }
}

bubble.addEventListener('click', sort);