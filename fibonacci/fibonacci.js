const fibonacci = function (num) {
    if (num instanceof String) {
        num = parseInt(num);
    } else if (num < 0) {
        return "OOPS";
    }
    let fibs = [];
    fibs.push(1);
    fibs.push(1);

    if (num < 3) {
        return fibs[fibs.length-1];
    }

    let i = 1;
    while (num-1 > i) {
        fibs.push(fibs[i] + fibs[i-1]);
        i++;
    }

    return fibs[fibs.length-1];
    
};

module.exports = fibonacci
