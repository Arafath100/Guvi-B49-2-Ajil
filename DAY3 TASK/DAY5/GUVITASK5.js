//Using For loop for JSON iterate:


var json = '{ "Name": "Ajil","Age": 21,"City": "Pollachi"}';
var a = JSON.parse(json);
for (var key in a) {
    console.log(key + ":" + a[key]);
}


//Using For in loop for JSON iterate:


var json = '{ "Name": "Ajil","Age": 21,"City": "Pollachi"}';
var a = JSON.parse(json);
for (var key in a) {
    if (a.hasOwnProperty(key)) {
   console.log(key + ":" + a[key]);
 }
}


//Using For of loop for JSON iterate:


var json = '{ "Name": "Ajil","Age": 21,"City": "Pollachi"}';
var a = JSON.parse(json);
var entries = Object.entries(a);
for (var [key, value] of entries) {
    console.log(key + ":" + value);
}


//Using ForEach loop for JSON iterate:


var json = '{ "Name": "Ajil","Age": 21,"City": "Pollachi"}';
var a = JSON.parse(json);
var values = Object.values(a);
Object.keys(a).forEach((key, index) => {
  console.log(key + ":" + values[index]);
});

