




function isPalindrome(str) {
   //remove all non alphanumeric numbers and lowercase it
    str = str.toLowercase().replace(/[\W_]/g, "");
   //create right and left pointer initially at the start and end of a string
   let left = 0;
   let right = str.length -1;
   
   //While left is less then right
   while (left < right) {

        //if characters at left and right pointer are not equal, return false
       if (str[left]!== str[right]) {
           return false
       }
   }
   //otherwise return true
     return true

}

module.exports = isPalindrome;
