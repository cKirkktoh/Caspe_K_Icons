console.log('Javascript is running!');

/* Longer js block comment
- const is a type of variable - abit of memory that can hold a value

JS uses (can use) AMY valid CSS selector to make a connection to ANY element on the page - it works the same way as CSS selectors do,
because it's USING css selectors tp find matching elementt(s)

The document is the DOM - the web page and all of its elements

querySelector is the method (function) that makes the connection between JS and te DOM (the elements)
*/

// step 1 - make the connection t the element(s) you want to interact with
const jpgGraphic = document.querySelector ("#bitmap");

function logID() {
    console.log('clicked on this element:', this.id)
}

// step 2 - decide how you want the user to interact with the object you created in step 1
jpgGraphic.addEventListener('click', logID);

const svgGraphic = document.querySelector ("#vector");

function logID() {
    console.log('clicked on this element:', this.id)
}

svgGraphic.addEventListener('click', logID)