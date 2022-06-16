const { create } = require("domain");

console.log("FUCK OFF JOSH");

// ---- primitives ---- //

/*
string
number
boolean
null
undefined
*/

let string = "hello";
let newString = `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
console.log(string, newString);

console.dir(String);
console.dir(Array);


// const user = {
//     name: "Josh",
//     age: 20
// };

// console.log(user.name);
// console.log(user["name"]);

const pizza = {
    name: "Hawaiian Orgy",
    price: 12000,
    details() {
        console.log(this)
    }
};

const createPizza = (pizzaName = "Example", pizzaPrice = 0) => {
    return {
        name: pizzaName,
        price: pizzaPrice,
        details() {
            newPrice = this.price * 2;
            console.log(newPrice)
        }
    };
};

let pizza1 = createPizza("Ham", 1600)

console.log(createPizza('Pepperoni', 2600))
pizza1.details();
pizza.details();

const pizzaObj = new Object();
pizzaObj.name = "Salami";
console.log(pizzaObj.name);

class Pizza {
    constructor(pizzaName, pizzaPrice) {
        this.name = pizzaName;
        this.price = pizzaPrice
    };
    details() {
        console.log(this.name, this.price)
    };
};

const pepperoni = new Pizza("pepperoni", 2500);
console.log(pepperoni);
console.log(pepperoni.name);
pepperoni.details();

let params = ["kolbasz", 2500];
let params1 = [...params, "raja"];

console.log(params1);

let pizzaFromArray = new Pizza(...params);

console.log(pizzaFromArray);