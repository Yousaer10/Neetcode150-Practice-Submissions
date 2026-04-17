class Solution {
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue(); 
        // or
        //const maxHeap = new PriorityQueue({ compare: (a, b) => b - a });
        for(const stone of stones) {
            maxHeap.enqueue(stone);
        }

        while (maxHeap.size() > 1) {
            const stone1 = maxHeap.dequeue();
            const stone2 = maxHeap.dequeue();

            if(stone1 !== stone2) {
                maxHeap.enqueue(stone1 - stone2);
            }
        }
        return maxHeap.isEmpty() ? 0 : maxHeap.front();
    }
}
