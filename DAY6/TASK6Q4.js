//write a class to calculate the uber price:

let distance = userInput[0];
let duration = userInput[1]; 
class UberCalculator {
  constructor(baseFare, costPerMinute, costPerMile) {
    this.baseFare = baseFare;
    this.costPerMinute = costPerMinute;
    this.costPerMile = costPerMile;
  }

  calculatePrice(distance, duration) {
    let fare = this.baseFare + (this.costPerMinute * duration) + (this.costPerMile * distance);
    return fare;
  }
}

let calculator = new UberCalculator(2.5, 0.1, 1.5);


let price = calculator.calculatePrice(distance, duration);
console.log(`The estimated Uber price is $${price}`);