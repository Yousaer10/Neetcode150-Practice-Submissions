class Solution {
    topKFrequent(nums, k) {
        // The Tally (Map/Dict/Object)
        let count = {};
        for(let num of nums) {
            count[num] = (count[num] ?? 0) + 1;
        }
        // The Buckets
        let buckets = [];
        for(let i = 0; i <= nums.length; i++) {
            buckets[i] = [];
        }
        for(let num in count) {
            let freq = count[num];
            buckets[freq].push(parseInt(num));
        }

        // The Harvest (Top K)
        let res = [];
        for(let i = buckets.length - 1; i >= 0; i--) {
            for(let num of buckets[i]) {
                res.push(num);
                if(res.length === k) return res;
            }
        }
    }
}
