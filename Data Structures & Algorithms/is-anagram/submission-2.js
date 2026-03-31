class Solution {
    isAnagram(s, t) {
        // Incorrect syntax: !=
        if(s.length !== t.length){ return false };

        const count = new Map();

        // JS Semantic issue: char 'in' s
        for(const char of s) {
            // Incorrect syntax missing '()': count.get(char ?? 0) 
            count.set(char, (count.get(char) ?? 0) + 1)
        }

        // JS Semantic issue: char 'in' t
        for(const char of t) {
            // Missing logic for existence
            if(!count.has(char)) { return false };
            count.set(char, (count.get(char) - 1))
            if(count.get(char) < 0){ return false };
        }
        return true;
    }
}
