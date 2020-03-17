var person = {
    firstName: "shan",
    LastName: "shaji",
    language: "hindi"
};

 Object.defineProperty(person, "language", {value: "NO"});

 console.log(person.language);