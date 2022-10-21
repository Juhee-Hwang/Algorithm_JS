const [n,...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((x)=>+x);

// 최소 힙 클래스 정의
class MinHeap {
    constructor() {
        this.nodes = []
    }
    insert(data) {
        this.nodes.push(data)
        this.bubbleUp()
    }
    bubbleUp(index = this.nodes.length - 1) {
        if (index < 1) return
        const currentNode = this.nodes[index]
        const parentIndex = Math.floor((index - 1) / 2)
        const parentNode = this.nodes[parentIndex]
        if (parentNode <= currentNode) return
        this.nodes[index] = parentNode
        this.nodes[parentIndex] = currentNode
        index = parentIndex
        this.bubbleUp(index)
    }
    extract() {
        const min = this.nodes[0]
        if (this.nodes.length === 1) {
            this.nodes.pop()
            return min
        }
        this.nodes[0] = this.nodes.pop()
        this.trickleDown()
        return min
    }
    trickleDown(index = 0) {
        const leftChildIndex = index * 2 + 1
        const rightChildIndex = index * 2 + 2
        const length = this.nodes.length
        let minimum = index
        if (!this.nodes[leftChildIndex] && !this.nodes[rightChildIndex]) return;
        if (!this.nodes[rightChildIndex]) {
            if (this.nodes[leftChildIndex] < this.nodes[minimum]) {
                minimum = leftChildIndex
            }
        }
        if (this.nodes[leftChildIndex] > this.nodes[rightChildIndex]) {
            if (rightChildIndex <= length && this.nodes[rightChildIndex] < this.nodes[minimum]) {
                minimum = rightChildIndex
            }
        } else {
            if (leftChildIndex <= length && this.nodes[leftChildIndex] < this.nodes[minimum]) {
                minimum = leftChildIndex
            }
        }
        if (minimum !== index) {
            let t = this.nodes[minimum]
            this.nodes[minimum] = this.nodes[index]
            this.nodes[index] = t
            this.trickleDown(minimum)
        }
    }
}


function solution(n, list){
  const heap = new MinHeap();
  let answer = [];
  arr.forEach((e,index) => {
    if (e !== 0) {
      heap.insert(e);
    } else {
      if (heap.nodes.length === 0) {
        answer.push(0);
      } else {
        let t = heap.extract();
        answer.push(t);
      }
    }
  })
  console.log(answer.join('\n'));
}

solution(n,arr);