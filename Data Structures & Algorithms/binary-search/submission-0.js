class Solution {
    search(nums, target) {
        let low = 0;
        let high = nums.length - 1;
        let mid;

        // Binary search = divide conquer not for loops
        while(low <= high) {
            // Was doing high - low
            mid = Math.floor((low + high) / 2);
            // Check for value
            if(target === nums[mid]) {
                // Return index these 2 were mixed up
                return mid;
                // Target on right side update lower bound
            } else if(target > nums[mid]) {
                low = mid + 1;
                // Target on left side update upper bound
            } else if(target < nums[mid]) {
                high = mid - 1;
                }
            }
        return -1;
    }
}
