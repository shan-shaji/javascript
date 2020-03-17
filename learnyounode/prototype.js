function Person(first, last, age, eyecolor){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyecolor = eyecolor;

}

Person.prototype.nationality = "English";

var myFather = new Person("shan", "shaji", 12, "blue");

console.log("The nationality of my father is" + myFather.nationality);

