//a) Write a constructor for the class Movie,
//   which takes a String representing the title of the movie,
//   a String representing the studio,
//   and a String representing the rating as its arguments, 
//   and sets the respective class properties to these values.


class Movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }


//b) The constructor for the class Movie will set the 
//   class property rating to "PG" as default when no rating is provided.

class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }


//c) Write a method getPG, which takes an array of base type Movie as its argument,
//   and returns a new array of only those movies in the input array with a rating of "PG".
//   You may assume the input array is full of Movie instances.
//   The returned array need not be full.

class Movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  
  function getPG(ipArr) {
    var PGMovies = [];
    
    for (var i = 0; i < ipArr.length; i++) {
      if (ipArr[i].rating === "PG") {
        PGMovies.push(ipArr[i]);
      }
    }
    
    return PGMovies;
  }
  
  let ipArr = [{title:"PS", studio: "A Productions", rating: "PG"},
              {title:"RRR", studio: "B Productions", rating: "UG"},
              {title:"ABCD", studio: "C Productions", rating: "IG"}];
  
  const pgMovies = getPG(ipArr);
  console.log(pgMovies);
  



  
//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
//   the studio “Eon Productions”, and the rating “PG­13”

let film = new Movie("Casino Royale", "Eon Productions", "PG13");
  
