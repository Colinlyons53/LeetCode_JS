// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(str) {
    //loop through the string 
    const len = str.length;
    for (var i = 0; i < str.length; i++) {
        for (var j = 1; j !== i; j++) {
            if (i == j) {
                return true
            }
        }
    }
}

module.exports = lengthOfLongestSubstring;
