const palindromes = function (word) {
    // place into lowercase
    word = word.toLowerCase();

    // Remove everything that isnt a letter
    const regex = /[^A-Za-z]/g;
    word = word.replace(regex, "");
    
    let start = 0;
    let end = word.length-1;
    for (start; start < end; start++) {
        if (word.charAt(start) !== word.charAt(end)) {
            return false;
        }
        end--;
    }
    return true;
};

module.exports = palindromes
