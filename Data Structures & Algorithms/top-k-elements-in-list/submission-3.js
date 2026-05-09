class Solution {
    topKFrequent(nums, k) {
        // The tally (map/dictionary/object)
        let count = {};

        for(let num of nums) {
            count[num] = (count[num] ?? 0) + 1; // ?? - Null Coalescing Operator
        }
        // The Buckets (Drawing)
        let buckets = []; // Create an array called buckets
        for(let i = 0; i <= nums.length; i++) {
            buckets[i] = []; // Create a sub array to match total length of array nums because worst case scenario every number is same
        }

        for(let num in count) {
            let freq = count[num];
            buckets[freq].push(parseInt(num)); // Put the numbers into labelled number boxes
        }

        // The Harvest (Top K)
        let res = [];
        // Loop from highest frequency bucket to lowest
        for(let i = buckets.length - 1; i >= 0; i--) {
            // Loop every number in each bucket
            for(let num of buckets[i]) {
                // Push the numbers into the response array
                res.push(num);
                // If response length is same as K's requirement, then output it
                if(res.length === k) return res;
            }
        }
    }
}
