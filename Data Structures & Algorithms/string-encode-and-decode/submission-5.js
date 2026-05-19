class Solution {
    encode(strs) {
        // Create an empty string
        let encodedString = '';
        // Loop through each string in strings
        for(let str of strs) {
            encodedString += str.length + '#' + str; // Decode as per format requirement, use '#' as a delimiter
        }
        return encodedString;
    }

    decode(str) {
        // Create an array as per problem requirement for decoding
        let decodedString = [];
        let i = 0; // Index points to current char in string
        while(i < str.length) { // Loop to check each character in string
            let j = i; // We reference j as i needs to be updated to maintain indexing, j can be mutated
            while(str[j] !== '#') { // Find '#' delimiter
                j++;
            }
            // Parse as Int because, it was encoded as a string, to use length arithmatecally it needs to be an integer else it would do type coercion or string concatenation 
            let length = parseInt(str.substring(i, j));
            // Update i to point to the 1st char in the string after the delimiter
            i = j + 1;
            // Extract word starting from 1st char and stop before last character we prev extracted, thus pointing to the last char in the word
            let word = str.substring(i, i + length);
            decodedString.push(word); // Push word into decodedString array as its been decoded
            i = i + length; // Update index i to point to 1st char in next word
        }
        return decodedString;
    }
}
