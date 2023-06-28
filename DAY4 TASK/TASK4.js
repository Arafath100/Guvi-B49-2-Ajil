//Using an arrow function to print odd numbers in an array in javascript:

const printOddNumbers = (arr) => {
    arr.forEach(num => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };

  //Using an arrow function to convert all the strings to title caps in a string array:
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  printOddNumbers(numbers);
  
  
  
  const convertToTitleCaps = (arr) => {
    return arr.map(str => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
  };

  //Using an arrow function to sum of all numbers in an array:
  
  
  const strings = ["hello", "world", "javascript"];
  const titleCaps = convertToTitleCaps(strings);
  console.log(titleCaps);
  
  
  
  const sumOfNumbers = (arr) => {
    return arr.reduce((sum, num) => sum + num, 0);
  };
  
  const numbers = [1, 2, 3, 4, 5];
  const sum = sumOfNumbers(numbers);
  console.log(sum);
  
  //Using an arrow function to return all the prime numbers in an array:

  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  
  const getPrimeNumbers = (arr) => {
    return arr.filter(num => isPrime(num));
  };
  
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primes = getPrimeNumbers(numbers);
  console.log(primes);
  
  //Using an arrow function to return all the palindromes in an array:
  
  const findPalindromes = arr => {
    return arr.filter(word => {
      const reversedWord = word.split('').reverse().join('');
      return word === reversedWord;
    });
  };
  
  const words = ['level', 'hello', 'radar', 'world', 'madam'];
  const palindromes = findPalindromes(words);
  console.log(palindromes);
  
  
  