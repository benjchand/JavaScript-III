/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding. The value of 'this' is the entire console Object.
* 2. Implicit Binding. When a function has a 'this."something"', the Object before that dot is 'this'.
* 3. New Binding.  When a constructor function is created,'this' refers to and is a placeholder for whatever 'new' instances are created.
* 4. Explicit Binding. 'this' can be specifically bound to something by using the methods 'call' and 'apply'.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function IceCream(flavor) {
    console.log (this);
    return flavor;
};
// IceCream("Rocky Road");

// Principle 2
// code example for Implicit Binding
const myObj = {
    exclamation: 'Oops!',
    saySorry: function(name) {
        console.log(`${this.exclamation} I'm very sorry, ${name}!`);
        console.log(this);
    }
};
myObj.saySorry('Brian');

// Principle 3
// code example for New Binding
function HamburgerOrder(meat) {
    this.bun = 'sesame';
    this.toppings = 'lettuce';
    this.order = function() {
        console.log(`I would like a ${meat} hamburger with a ${this.bun} bun and ${this.toppings}.`);
    };
}

const Brian = new HamburgerOrder('beef')
const Jeremy = new HamburgerOrder('salmon')

Brian.order();
Jeremy.order();


// Principle 4

Brian.order.apply(Jeremy);
// code example for Explicit Binding