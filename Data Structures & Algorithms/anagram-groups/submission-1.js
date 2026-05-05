class Solution {
    groupAnagrams(strs) {
        let res = {};

        for(let s of strs) {
            const count = new Array(26).fill(0);
            for(let char of s) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            const key = count.join(',');
            if(!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }
        return Object.values(res);
    }
}
