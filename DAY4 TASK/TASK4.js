//Using an arrow function to print odd numbers in an array in javascript:


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var printOddNumbers = (arr) => {
  arr.forEach((number) => {
    if (number % 2 !== 0) {
      console.log(number);
    }
  });
};

printOddNumbers(numbers);



//Using an arrow function to convert all the strings to title caps in a string array:

  
var stringArray = ["hello", "world", "javascript"];

var titleCapsArray = stringArray.map(str => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
});

console.log(titleCapsArray);



//Using an arrow function to sum of all numbers in an array:
  
  
var numbers = [1, 2, 3, 4, 5, 6];

var sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum);


  
//Using an arrow function to return all the prime numbers in an array:

  
var isPrime = num => {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

var getPrimeNumbers = numbers => numbers.filter(isPrime);

var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var primeNumbers = getPrimeNumbers(numbersArray);

console.log(primeNumbers);  



//Using an arrow function to return all the palindromes in an array:

  
  var a = ["madam", "ajil", "mom", "dad", "arafath"];
var findPalindromes = (arr) => {
  
  var isPalindrome = (word) => {
    var reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
  };

  
  var palindromes = arr.filter((word) => isPalindrome(word));

  return palindromes;
};

var palindromes = findPalindromes(a);
console.log(palindromes); 