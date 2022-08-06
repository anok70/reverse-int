module.exports = function reverse (n) {
    let str;
    let n1;
    str = n.toString();

    if (n <0) {
        strRevers = str.slice(1).split('').reverse().join('');
        n1 = Number(strRevers);
    }
    else {
        strRevers = str.split('').reverse().join('');
        n1 = Number(strRevers);
    }

    return n1;
}
