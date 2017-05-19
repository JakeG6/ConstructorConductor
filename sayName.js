//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName= function() {
      alert(this.name);
    }
  }


//Now create three instances of Person with data you make up

  //code here
  var adam = new Person("Adam Carmine", 20);
  var ben = new Person("Benjamin Carmine", 21);
  var clay = new Person("Clay Carmine", 22);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
