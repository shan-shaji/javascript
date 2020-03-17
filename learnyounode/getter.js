'use strict'

a = 5;
const obj = {

	log: ['a', 'b', 'c'],
	get latest(){
		if(this.log.length == 0){
			return undefined;
		}
		return this.log[this.log.length - 1];
	}

	
}


console.log(a)
var a;
console.log(obj.latest);