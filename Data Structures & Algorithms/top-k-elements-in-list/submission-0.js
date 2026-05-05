class Solution {
    topKFrequent(nums, k) {
        const count = {};
        // Create buckets: index represents freq, val is a list of num
        // Array length is (nums.length + 1) to handle max possible freq
        const freqBuckets = Array.from({length: nums.length + 1}, () => []);

        // Count freqs
        for(const n of nums) {
            count[n] = (count[n] ?? 0) + 1;
        }

        // Map nums to their freq buckets
        for(const n in count) {
            const f = count[n];
            freqBuckets[f].push(parseInt(n));
        }

        // Collect top K elements from highest to lowest freq
        const res = [];
        for(let i = freqBuckets.length - 1; i > 0; i--) {
            for(const n of freqBuckets[i]) {
                res.push(n);
                if(res.length === k) return res;
            }
        }
    }
}
