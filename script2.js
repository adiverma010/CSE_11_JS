
// fcn in a variable 
var sayHello = function()
{
    alert("hello world !");
}
sayHello();

var numberArray = [1,2,3];
var animals= new Array("cat", "dog", "mouse", "lion");

// objects key indexing not like array (indexing number)
var person = 
{
    name: "barack obama II",
    age: '51',
    title: '44th America president'
};
console.log(person.name);

const sym1 = Symbol(4)
console.log(sym1);
const sym2 = Symbol(4)
console.log(sym2);
if(sym1==sym2){
    console.log("true");
}
else{
    console.log("false");
}
console.log(sym1==sym2); //print t/f without if else

   var i;
    for(i=0; i<3; i=i+1)
        {
            console.log(i);
        }
