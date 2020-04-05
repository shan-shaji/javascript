const mongoose = require('mongoose');


// Connection URL
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useUnifiedTopology: true, useNewUrlParser: true})


// Creating a Structure
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true  // [true, "no name added"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});


const Fruit = mongoose.model("Fruit", fruitSchema);


const fruit = new Fruit({
  rating: 5,
  review: "A nice Fruit."
});

const banana  = new Fruit({
  name: "banana",
  rating: 5,
  review: "Not much interesed"
})

const kiwi = new Fruit({
  name: "kiwi",
  rating: 8,
  review: "much interested."
  
})

const orange = new Fruit({
  name: "Orange",
  rating: 8,
  review: "Superb"
})

orange.save();






// .....People Collection........


const personShema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

// creeating  a collection 
const Person = mongoose.model("Person", personShema);


const person = new Person({
  name: "Apple",
  age: 10,
})

const amy = new Person({
    name: "shan",
    age: 20,
    favouriteFruit: kiwi
})


const john = new Person({

  name: "john",
  age: 40,
  favouriteFruit: orange
})

john.save();






// creeating  a collection 





// fruit.save();
// Fruit.insertMany([banana, kiwi], function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("inserted success");
//   }
// })

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);

  }else{
    fruits.forEach(function(fruit){
      console.log(fruit.name);
      mongoose.connection.close();
    })
  }
});

Fruit.updateOne({_id: "5e898ede8755874a0cda8936"}, {name: "peach"}, function(err){
  if(err){
    console.log(err);

  }else{
    console.log("updated");
  }
})


