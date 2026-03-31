class Solution {
    isPalindrome(s) {
        // Gotcha Regex
       const palindrome = s.toLowerCase().replace(/[^a-z0-9]/g,"");
       let left = 0;
       let right = palindrome.length - 1;

       while(left < right) {
        // This is how you access str indices 
        if(palindrome[left] !== palindrome[right]) {
            return false
        }
        left++;
        right--;
       }
       return true;

    }
}
