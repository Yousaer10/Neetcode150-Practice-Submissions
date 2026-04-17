class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinPriorityQueue();

        for(const num of nums) {
            this.add(num);
        }
    }

    add(val) {
        this.minHeap.enqueue(val);

        if(this.minHeap.size() > this.k) {
            this.minHeap.dequeue(val);
        }

        return this.minHeap.front(val);
    }
}
