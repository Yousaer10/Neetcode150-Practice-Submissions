class Solution {
    groupAnagrams(strs) {
        // Map to store groups
        const res = {};

        // Loop through every word
        for(let s of strs) {
            // Create a frequency array for alphabet
            const count = new Array(26).fill(0);

            for(let char of s) {
                // Find the index (0-25) by (-) 'a's char code
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            // Generate Key: Convert arr to str to use as Map Key
            // E.g. "eat" becomes "1,0,0,0,1,0,0...etc"
            const key = count.join(',');

            // Grouping Logic
            if(!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }
        return Object.values(res);
    }
}
