const [n,...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((x)=>+x);

// 최소 힙 클래스 정의
class MinHeap {
    constructor() {
        this.nodes = []
    }
  // 삽입 메소드 구현
  // 완전 이진트리는 왼쪽부터 채워지기 때문에 그냥 PUSH 메소드를 사용하면 된다.
    insert(data) {
        this.nodes.push(data)  
        this.bubbleUp()
    }
  // 새로운값 삽입
    bubbleUp(index = this.nodes.length - 1) {
        if (index < 1) return
        const currentNode = this.nodes[index]
        const parentIndex = Math.floor((index - 1) / 2)
        const parentNode = this.nodes[parentIndex]
        // 부모값이 더 작으면 끝내기 
        if (parentNode <= currentNode) return
        // 그렇지 않으면 자리바꾸기
        this.nodes[index] = parentNode
        this.nodes[parentIndex] = currentNode
        index = parentIndex
        this.bubbleUp(index) // 여기가 재귀호출! 제자리로 가려면 계속 해야하니 재귀 사용
    }

  //추출하기
    extract() {
        const min = this.nodes[0] // 최소값이 최상단(인덱스 0)에 있음
        if (this.nodes.length === 1) {
            this.nodes.pop() //제거
            return min
        }
        this.nodes[0] = this.nodes.pop()
        this.trickleDown()
        return min
    }

//trickleDown 메소드는 부모 노드와 왼쪽 자식 노드, 오른쪽 자식 노드의 값을 비교한 후 자식 노드가 부모 노드보다 작은 값을 가지고 있다면 부모 노드와 해당 자식 노드의 위치를 변경한다.
// 노드를 제거하는 과정
    trickleDown(index = 0) {
        const leftChildIndex = index * 2 + 1
        const rightChildIndex = index * 2 + 2
        const length = this.nodes.length
        let minimum = index
        // 오른쪽 왼쪽 노드 없다면 그냥 반환
        if (!this.nodes[leftChildIndex] && !this.nodes[rightChildIndex]) return;

      //오른쪽 노드가 없다면
        if (!this.nodes[rightChildIndex]) {
            if (this.nodes[leftChildIndex] < this.nodes[minimum]) {
                minimum = leftChildIndex
            }
        }

      // 왼쪽이 오른쪽 노드보다 크다면
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