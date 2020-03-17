function person(fname, lname, age, eye,){
	this.fname = fname;
	this.lname = lname;
	this.age = age;
	this.eye = eye;

}

var myfather = new person("shaji", "Abraham",52, "black" );
myfather.fullName = function(){

return this.fname + " " + this.lname;

} 

console.log(myfather.fullName()	)