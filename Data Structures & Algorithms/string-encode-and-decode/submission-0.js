class Solution {
    encode(strs) {
        let res = "";
        for(let str of strs) {
            res = res + (str.length + '#' + str);
        }
        return res;
    }

    decode(str) {
        let res = [];
        let i = 0;
        while(i < str.length) {
            let j = i;
            while(str[j] !== '#') {
                j++;
            }
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            let word = str.substring(i, i + length);
            res.push(word);
            i = i + length;
        }
        return res; 
    }
}
