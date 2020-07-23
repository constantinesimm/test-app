const debounced = function debounce(fn, ms) {
    let isCooldown = false;             //state -> ready to run

    return function () {
        if (isCooldown) return;         //while isCooldown true - ignore other fn calls

        isCooldown = true;              //state -> waiting for ends of timeout
        setTimeout(() => {
            isCooldown = false;         //setting state -> ready to run
            fn.apply(this, arguments);  //run func with current context
        }, ms);
    }
};

const chunk = (arr, len) => {
    const chunks = [];
    let i = 0;

    while (i < arr.length) { 
        chunks.push(arr.slice(i, i += len))
    }

    return chunks;
};

export { debounced, chunk };