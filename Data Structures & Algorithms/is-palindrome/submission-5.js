class Solution {
    isPalindrome(s) {
        const palindrome = s.toLowerCase().replace(/[^a-z0-9]/g,"");
        let left = 0;
        let right = palindrome.length - 1;
        while(left < right) {
            if(palindrome[left] !== palindrome[right]) {
                return false
            }
            left++;
            right--;
        }
        return true;
    }
}
