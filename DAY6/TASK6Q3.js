//Write a “person” class to hold all the details:


class Person {
    constructor(Name, Age, Email, Number) {
      this.name = Name;
      this.age = Age;
      this.email = Email;
      this.number = Number;
    }
  
    getName() {
      return this.name;
    }
  
    getAge() {
      return this.age;
    }
  
    getEmail() {
      return this.email;
    }
    
    getNumber() {
      return this.number;
    }
  
    setName(Name) {
      this.Name = name;
    }

    setAge(Age) {
      this.Age = age;
    }
  
    setEmail(Email) {
      this.Email = email;
    }
    
    setNumber(Number) {
      this.Number = number;
    }
  }
  
  let person = new Person("Ajil", 21, "arafath2092@gmail.com", 6369503934);
  
 
  console.log(person.getName()); 
  console.log(person.getAge()); 
  console.log(person.getEmail());
  console.log(person.getNumber());