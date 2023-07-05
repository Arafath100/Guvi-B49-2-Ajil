//Convert the UML diagram to Typescript class. - use number for double:

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  getRadius(){
    return this.radius;
    };
  setRadius(value){
    this.radius = value;
    };
  getColor(){
    return this.color;
  };
  setColor(){
    this.color = value;
  };
  toString() {
    return `Radius: ${this.radius}, Color: ${this.color}`;
  }
  
  getArea(){
    return Math.PI * this.radius * this.radius;
    };
  getCircumference(){
    return 2 * Math.PI * this.radius;
    };
}

let cir = new Circle(1.0, "red");

console.log(cir.getRadius());  
console.log(cir.getColor());
console.log(cir.toString());   
console.log(cir.getArea());    
console.log(cir.getCircumference());

cir.Radius = 2.5;
cir.Color = "blue";

console.log(cir.getRadius());  
console.log(cir.getColor());  
console.log(cir.toString());   
console.log(cir.getArea());    
console.log(cir.getCircumference());