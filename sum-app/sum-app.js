class SumApp {
  constructor() {
    this.numbers = [];
  }

  addNumber(n) {
    this.numbers.push(n);
  }

  getSum() {
    if (this.numbers.length === 0) {
      return 0;
    }

    let sum = 0;

    for (let i = 0; i < this.numbers.length; i++) {
      sum += this.numbers[i];
    }
    return sum;
  }

  reset() {
    this.numbers = [];
  }


}

const sumApp = new SumApp();

sumApp.addNumber(1);
sumApp.addNumber(2);

console.log(sumApp.numbers.length); // 2

console.log(sumApp.getSum()); // 3

sumApp.reset();

console.log(sumApp.numbers.length); // 0
console.log(sumApp.getSum()); // 0
