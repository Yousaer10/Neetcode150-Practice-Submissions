class Solution {
    search(nums, target) {
        let low = 0;
        let mid;
        let high = nums.length - 1;

        while(low <= high) {
            mid = Math.floor((high + low) / 2);
            if(target === nums[mid]) {
                return mid;
            } else if(target > nums[mid]) {
                low = mid + 1;
            } else if(target < nums[mid]) {
                high = mid - 1;
            }
        }
        return -1;
    }
}
