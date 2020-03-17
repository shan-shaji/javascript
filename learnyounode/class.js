class car{
	constructor(brand){
		this.carname = brand;
	}

	  present(){
	  	return "i have a " + this.carname;
	  } 

}


mycar = new car("ford");
a = mycar.present();
console.log(a)