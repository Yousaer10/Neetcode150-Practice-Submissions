class Solution {
    isPalindrome(s) {
        // Forgot ^ in regex
        const palindrome = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        // Used const
        let right = palindrome.length - 1;
        let left = 0;

        while(left < right) {
            if(palindrome[left] !== palindrome[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
