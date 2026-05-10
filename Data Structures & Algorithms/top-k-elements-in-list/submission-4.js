class Solution {
    topKFrequent(nums, k) {
        // The Tally (Map/Object/Dictionary)
        let count = {};
        // Loop over nums array and map number to frequency
        for(let num of nums) {
            count[num] = (count[num] ?? 0) + 1; // Using null coalescing operator to check for undefined or null values (if null then it's 1st time we have encountered this number so start from 0 + 1 otherwise we keep adding +1)
        };
        // The Buckets (Array of Arrays)
        let buckets = [];
        // We create a bucket for each number for the worst case scenario where all numbers are the same
        for(let i = 0; i <= nums.length; i++) {
            buckets[i] = []; // Create a subarray for each interation (length of nums)
        }

        // Loop over the count (frequency of how many elements in nums)
        for(let num in count) {
            // This will give us the frequency from key (number) to value (freq)
            let freq = count[num];
            // Here we are just saying based on the frequency of the current number push it into the correct frequency labelled bucket (subarray) and parse the num to an integer as the "count" mapping converts them to a string by default
            buckets[freq].push(parseInt(num));
        };
        // The Harvest (Top K)
        let res = [];
        // Search from highest bucket to lowest
        for(let i = buckets.length - 1; i >= 0; i--) {
            // Loop every bucket's content (to access it's elements of the subarray)
            for(let num of buckets[i]) {
                // Push the number into the response
                res.push(num);
                // If length mathces K then output res
                if(res.length === k) return res;
            }
        }
    }
}
