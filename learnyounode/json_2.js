var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}'; 

var obj = JSON.parse(text);

console.log(obj);

var ob = {
	firstName: "hello",
	lastName: "jacob",
	names: [{
		firstName: "shon",
		lastName: "shaji"
	},
	{
		firstName: 'joyal',
		lastName: "jose"
	},
	{
		firstName: "jacob",
		lastName: "kurian"
	}]

}


console.log(ob.names[0].firstName);