// Mouse event :
// 1. click : when the mouse button is clicked (onclick)
// 2. mouseover : when the mouse pointer moves over an element (onmouseover)
// 3. mouseout : when the mouse pointer moves out of an element (onmouseout)
// 4. mousedown : when the mouse button is pressed down (onmousedown)
// 5. mouseup : when the mouse button is released (onmouseup)
// 6. mousemove : when the mouse pointer moves within an element (onmousemove)

function onClick() {
console.log("Mouse Clicked");
}  
function onMouseover() {
 console.log("Mouse Over");
}
function onMouseout() {
console.log("Mouse Out");
}
function onMousedown() {
    console.log("Mouse Down"); 
}
function onMouseup() {
    console.log("Mouse Up"); 
}
function onMousemove() {
    console.log("Mouse Move");
}

// Keyboard event :
// 1. keydown : when a key is pressed down (onkeydown)
// 2. keyup : when a key is released (onkeyup)
// 3. keypress : when a key is pressed and released (onkeypress)

// form event :
// 1. submit : when a form is submitted (onsubmit)
// 2. reset : when a form is reset (onreset)
// 3. change : when the value of an input element changes (onchange)
// 4. input : when the value of an input element changes (oninput)
// 5. focus : when an element gains focus (onfocus)
// 6. blur : when an element loses focus (onblur)

const x = document.querySelector("input");
x.addEventListener('focus', onhandlefocus);
x.addEventListener('blur', onhandleblur);
function onhandlefocus() 
{
    x.style.backgroundColor = "yellow";
}
function onhandleblur() 
{
    x.style.backgroundColor = "red";
    x.style.borderColor = "blue";
}

// window event :
// 1. load : when the page has finished loading (onload)
// 2. resize : when the browser window is resized (onresize)
// 3. scroll : when the user scrolls the page (onscroll)
// 4. unload : when the user leaves the page (onunload)

function myBody()
{
    alert("Page Loaded");
}
