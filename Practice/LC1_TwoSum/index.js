// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,2,4], 9) --> [1,2]

function twoSum(arr, target) {
        //loop through the array 
        for (var i = 0; i < nums.length; i++) {
            for (var j = i + 1; j < nums.length; j++ ){
                if (nums[j] == target - nums[i] ) {
                    return new int[arr] , { i, j };
                }
            }
        }
        throw new IllegalArguementException ("No Two Sum Solution");
}




module.exports = twoSum;
