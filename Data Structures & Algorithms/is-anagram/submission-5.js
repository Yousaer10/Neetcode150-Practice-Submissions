class Solution {
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false;
        }
        const count = new Map();
        
        for(let char of s) {
            count.set(char, (count.get(char) ?? 0) + 1);
        }

        for(let char of t) {
            // If this char of t does not exist in map containing count of char s
            if(!count.has(char)) {
                return false;
            }
            count.set(char, count.get(char) - 1);
            // If invariant fails
            if(count.get(char) < 0) {
                return false;
            }
        }
        return true;
    }
}
