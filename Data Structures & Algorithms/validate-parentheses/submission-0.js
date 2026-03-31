class Solution {
    isValid(s) {
        const stack = [];
        let popped = '';
        // 
        const pairs = {
            ')': '(',
            '}': '{',
            ']': '['
        };


        for(let i = 0; i < s.length; i++) {
            // Must compare s[i] each time, was doing s[i] == ''||''||''
            if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
                stack.push(s[i]);
            } else {
                if(stack.length === 0) {
                    return false;
                }
                popped = stack.pop();
                // Was comparing with s[i] but needed map 'pairs' for 1 to 1 comparison
                if(popped !== pairs[s[i]]) {
                    return false;
                }
            }
        }
        if(stack.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}
