//To compare two json have the same properties without order:
//To compare two JSON objects with the same properties in a different order using "==" operator.
//Then using if else condition to campare.


let obj1 = {name:"Ajil",age:21};
let obj2 = {age:21,name:"Ajil"};

let json1 = JSON.stringify(obj1);
let json2 = JSON.stringify(obj2);
  
if (json1 == json2) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}