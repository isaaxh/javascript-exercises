const fibonacci = function(num) {
    let x = 0;
    let y = 1;
    let z;
    let finalNum = num;

    if (isNaN(num)) {
        finalNum = pasrseInt(num);
    }

    if (finalNum < 0) return 'OOPS';
   
    for (let i = 1; i < finalNum; ++i) {
        z = x + y;
        x = y;
        y = z;
    }
    return y; 
};

// Do not edit below this line
module.exports = fibonacci;
