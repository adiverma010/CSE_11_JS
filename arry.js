let collection = [
    {},[],true,"john", function(){}, null, undefined, 234567890 ,new Date(), new String("hello"), new Number(42)
];
console.log(collection);
// console.log(collection[0]);
// console.log(collection[1]);
// console.log(collection[2]);
// console.log(collection[3]);
// console.log(collection[4]);
// console.log(collection[5]);
// console.log(collection[6]);
// console.log(collection[7]);
// console.log(collection[8]);
// console.log(collection[9]);
collection.teacherName = "Mr. Smith";
console.log(collection.teacherName);
collection.phoneNumber = "123-456-7890";
console.log(collection.phoneNumber);
console.log(collection.length);