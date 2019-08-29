// Queue = FIFO
// Stack = LIFO


class Queue{

  constructor(){
    this.in = [];
    this.out = [];
  }

  enqueue(val) {
    this.in.push(val);
  }

  dequeue() {
    if (this.out.length === 0){
      while (this.in.length > 0){
        this.out.push(this.in.shift())
      } 
    }

    this.out.shift();
  }

}

function windowedMaxRange(arr, windowSize){
  let wStart = 0;
  let wEnd = windowSize;

  let max = 0;
  while (wEnd <= arr.length) {
    let subArr = arr.slice(wStart, wEnd);
    console.log(subArr);
    let curMax = Math.max(...subArr)
    let curMin = Math.min(...subArr)
    if (curMax - curMin > max) max = curMax - curMin;

    wStart++;
    wEnd++;
  }

  return max
}
