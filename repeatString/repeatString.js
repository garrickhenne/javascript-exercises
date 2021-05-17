const repeatString = function(word, timesRepeated) {
    if (timesRepeated < 0) {
        return "ERROR";
    }
    let rtn = "";
    for (let i = 0; i < timesRepeated; i++) {
        rtn += word;
    }
    return rtn;

}

module.exports = repeatString
