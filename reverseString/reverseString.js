const reverseString = function(word) {
    if (word === "") {
        return "";
    }
    let len = word.length -1;
    let rtn = "";
    while (len >= 0) {
        rtn += word.charAt(len);

        len--;
    }

    return rtn;

}

module.exports = reverseString
