class Solution {
    
    search(nums, target) {
        let low = 0;
        let mid;
        let high = nums.length - 1;

        while(low <= high) {
            mid = Math.floor((low + high) / 2);
            if(nums[mid] === target) {
                return mid;
            } else {
                if(nums[mid] < target) {
                    low = mid + 1;
                } else if(nums[mid] > target) {
                    high = mid - 1;
                }
            }
        }
        return -1;
    }
}
