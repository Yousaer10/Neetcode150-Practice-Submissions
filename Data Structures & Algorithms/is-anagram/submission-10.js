class Solution {
    isAnagram(s, t) {
        // Do a mapping of the letters for string and frequency
        if(s.length !== t.length) return false;
        let count = new Map();
        for(const char of s) {
            count.set(char, (count.get(char) ?? 0) + 1);
        }
        for(const char of t) {
            if(!count.has(char)) {
                return false;
            }
            count.set(char, (count.get(char) - 1));
            if(count.get(char) < 0) {
                return false;;
            }
        }
        return true
    }
}
