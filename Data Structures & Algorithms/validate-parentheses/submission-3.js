class Solution {
    isValid(s) {
        let stack = [];
        const pairs = {
        ')' : '(',
        '}' : '{',
        ']' : '['
        };

        let popped;
        
        for(let i = 0; i < s.length; i++) {
            if(s[i] == '(' || s[i] == '{' || s[i] == '[') {
                stack.push(s[i]);
            } else {
                if(stack.length === 0) {
                    return false
                }
                popped = stack.pop();
                if(pairs[s[i]] !== popped) {
                    return false
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