class Solution {
    isValid(s) {
        let stack = [];
        // Key : Value for Hash Map
        const pairs = {
            ')':'(',
            '}':'{',
            ']':'[',
        };
        let popped;

        for(let i = 0; i< s.length; i++) {
            if(s[i] == '(' || s[i] == '{' || s[i] =='[') {
                // When pusing specify what is pushed in to stack array
                stack.push(s[i]);
            } else{
                // Sloppy mistake using !==
                if(stack.length === 0) {
                    return false;
                }
                popped = stack.pop()
                if(pairs[s[i]] !== popped) {
                    return false;
                }
            }
        }
        // Sloppy mistake using !==
        if(stack.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}
