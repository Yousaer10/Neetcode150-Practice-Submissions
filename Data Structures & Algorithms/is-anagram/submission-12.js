class Solution {
    
    isAnagram(s, t) {
        let count = new Map();
        if(s.length !== t.length) return false;
        for(const char of s) {
            count.set(char, (count.get(char) ?? 0) + 1);
        }

        for(const char of t) {
            if(!count.has(char)) {
                return false;
            }
            count.set(char, count.get(char) - 1);
            if(count.get(char) < 0) {
                return false;
            }
        }
        return true;
    }
}
