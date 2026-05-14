class Solution {
    encode(strs) {
        // Create an empty string
        let res = "";
        // Loop through each string in strings
        for(let str of strs) {
            res = res + (str.length + '#' + str); // To decode add the previous string response to the current string's length and use '#' as a delimiter followed by the string
        }
        // Once all strings are encoded return the response
        return res;
    }

    decode(str) {
        // Create a response array as per problem requirement for decoding
        let res = [];
        // This index points current character in the string
        let i = 0;
        // Loop to check each character in the string
        while(i < str.length) {
            // We reference j as i needs to maintain the indexing, j can be mutated
            let j = i;
            // Inner while loop keeps looping until we don't find the '#' delimeter
            while(str[j] !== '#') {
                // j is incremented to move onto the next character in the string we want to check
                j++;
            }
            // We have to parse as int because it was originally encoded as a string, to make use of length it needs to be an integer otherwise it would perform a Type Coercion or String Concatenation
            let length = parseInt(str.substring(i, j)); // Substring allows us to extract data between the 1st parameter and 2nd
            // We move i to j + 1 as it will point to the 1st character in the string after the delimiter
            i = j + 1;
            // Again we extract the word starting at the 1st character and stop before the last character at i + the length we previous extracted which points to the last character in the word
            let word = str.substring(i, i + length);
            // We push the word into the response array as it has been decoded
            res.push(word);
            // We update index i to point to the next word's 1st character
            i = i + length;
        }
        // Returns the decoded string response array
        return res; 
    }
}
