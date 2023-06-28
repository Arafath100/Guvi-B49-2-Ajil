//A.Using an anonymous function to print odd numbers in an array in javascript:

var num = [1, 2, 3, 4, 5, 6, 7, 8];

num.forEach(function(number) {
  if (number % 2 !== 0) {
    console.log(number);
  }
});

//A.Using an IIFE function to print odd numbers in an array in javascript:

(function() {
  for (var i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      console.log(num[i]);
    }
  }
})();


//B.Using an anonymous function to convert all the strings to title caps in a string array:

var a = ["ajil", "arafath", "h"];

var titleCapsArray = a.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
});

console.log(titleCapsArray);

//B.Using an IIFE function to convert all the strings to title caps in a string array:

var titleCapsArray = (function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
});
})(a);

console.log(titleCapsArray);

//C.Using an anonymous function to sum of all numbers in an array:

var number = [1, 2, 3, 4, 5,6,7,8];

var sum = function(arr) {
  let result = 0;
  arr.forEach(function(num) {
    result += num;
  });
  return result;
};

console.log(sum(number));

//C.Using an IIFE function to sum of all numbers in an array:

var sum = (function(arr) {
    let result = 0;
    arr.forEach(function(num) {
      result += num;
    });
    return result;
  })(number);
  
  console.log(sum);

  //D.Using an anonymous function to return all the prime numbers in an array:

var num = [1, 2, 3, 4, 5, 6, 7];

var primes = num.filter(function(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
});

console.log(primes); 

//D.Using an IIFE function to return all the prime numbers in an array:

var primes = (function(arr) {
    return arr.filter(function(num) {
      for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    });
  })(num);
  
  console.log(primes);  

//E.Using an anonymous function to return all the palindromes in an array:
 
var words = ['ajil','mom','ball','dad'];
var findPalindromes = function(arr) {
   palindromes = [];
  
  arr.forEach(function(word) {
    if (word === word.split('').reverse().join('')) {
      palindromes.push(word);
    }
  });
  
  return palindromes;
};
var result = findPalindromes(words);
console.log(result);

//E.Using an IIFE function to return all the palindromes in an array:

var findPalindromes = (function(arr) {
    var palindromes = [];
    
    arr.forEach(function(word) {
      if (word === word.split('').reverse().join('')) {
        palindromes.push(word);
      }
    });
    
    return palindromes;
  })(['ajil','mom','ball','dad']);
  
  console.log(findPalindromes);
  
  //F.Using an anonymous function to return  median of two sorted arrays of the same size:

  var arr1 = [1, 2, 3];
  var arr2 = [4, 5, 6, 7];
  
  var findMedian = function(arr1, arr2) {
    var merged = [...arr1, ...arr2].sort((a, b) => a - b);
    var mid = Math.floor(merged.length / 2);
    
    if (merged.length % 2 === 0) {
      return (merged[mid - 1] + merged[mid]) / 2;
    } else {
      return merged[mid];
    }
  };
  
  console.log(findMedian(arr1, arr2));

  //F.Using an IIFE function to return  median of two sorted arrays of the same size:
  
  var median = (function(arr1, arr2) {
    var merged = [...arr1, ...arr2].sort((a, b) => a - b);
    var mid = Math.floor(merged.length / 2);
    
    if (merged.length % 2 === 0) {
      return (merged[mid - 1] + merged[mid]) / 2;
    } else {
      return merged[mid];
    }
  })(arr1, arr2);
  
  console.log(median);

  //G.Using an anonymous function to remove duplicates from an array:

var array = [1, 2, 3, 3, 4, 4, 5, 5, 5];

var myArray = function(arr) {
  return arr.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
}(array);

console.log(myArray);



  //G.Using an IIFE function to remove duplicates from an array:

  var uniqueArray = (function(arr) {
    return arr.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
  })(array);
  
  console.log(myArray);

   //H.Using an anonymous function to rotate an array by k times:

   const rotateArray = (arr, k) => {
    const rotated = arr.slice(k).concat(arr.slice(0, k));
    return rotated;
  };
  
  const array = [1, 2, 3, 4, 5];
  const k = 2;
  const rotArray = rotateArray(array, k);
  console.log(rotArray);
  

   //H.Using an IIFE function to rotate an array by k times:


   const array = [1, 2, 3, 4, 5];
   const k = 3;
   
   const rotatedArray = (function(arr, k) {
     const rotated = arr.slice(k).concat(arr.slice(0, k));
     return rotated;
   })(array, k);
   
   console.log(rotatedArray);
  
  
