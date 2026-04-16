class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        // 1. Initialize a Min-Heap (VIP Lounge)
        this.minHeap = new MinPriorityQueue();

        // 2. Add initial numbers to the stream
        for (const num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        // 3. New person tries to enter the lounge
        this.minHeap.enqueue(val);

        // 4. If lounge is over capacity (> k), the weakest (min) must leave
        if (this.minHeap.size() > this.k) {
            this.minHeap.dequeue();
        }

        // 5. The "bouncer" (min element) is now the kth largest
        return this.minHeap.front();
    }
}
