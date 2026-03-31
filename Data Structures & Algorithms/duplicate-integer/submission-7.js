class Solution {
    hasDuplicate(nums) {
        const duplicate = new Set();

        for(const num of nums) {
            if(!duplicate.has(num)){
                duplicate.add(num);
            } else {
                return true;
            }
        }
        return false;
    }
}
