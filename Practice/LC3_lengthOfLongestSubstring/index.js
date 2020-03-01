// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
    let startIndex = 0;
    let maxLength = 1;

    function expandAroundMiddle(left, right) {
        while (left >= 0 && right <= s.length && s[left] === s[right]) {
            const currentPalLength = right - left + 1;
            left -= 1;
            right += 1;
        }
    }
}

module.exports = lengthOfLongestSubstring;
