let x = {}; // object declaration for key value pair

let person = {
    name: "John",
    age: 30,
    IsMarried: false,
    hobbies: ["reading", "traveling", "cooking"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    },
    getinfo: function(){} //any fxn called by getinfo and getinfo call by person.getinfo() // person is object and getinfo is method of person object.
};


let y = new Object(); // object declaration using constructor (used in classes)

let person2 = new Object();
person2.name = "Jane";
person2.age = 25; 
person2.IsMarried = true;
person2.hobbies = ["painting", "dancing"];
person2.address = {};
person2.address.street = "456 Elm St";
person2['address']['city'] = "Los Angeles";