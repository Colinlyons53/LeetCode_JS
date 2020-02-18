




function isPalindrome(str) {
    //rou
    let len = math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
        if (str[i] !== str[str.length - i - 1])
            return false;
        return true;

}

module.exports = isPalindrome;
