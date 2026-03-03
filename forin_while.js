// second type of loop
const person0 = {
    name: "John",
    age: 30,
    city: "New York"
};

for (var x in person0)
    {
        console.log("person details"+x+":"+person0[x]); //when prgrm runs in browser, console is used to print output.

    }
// while loop
var count = 0;
document.write("starting loop" + "<br/>"); //doc. is used when prgrms runs locally in terminal
while(count < 10)
    {
        document.write("Current count: "+ count);
        document.write("<br/>");
        count++;    
    }