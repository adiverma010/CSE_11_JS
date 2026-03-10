// normal function
var res = mult(12, 30); // use const variable instead of var bcz fxn returns a fix value
function mult(a, b)
{
    return a * b;
}
document.write(res);

// here arrow function starts
var add = (x,y) => 
    {
        console.log(x+y);
    }
add(10, 20);