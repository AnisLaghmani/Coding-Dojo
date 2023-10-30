//Define pizza object
function pizzaO(crust,sauce, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheeses = cheese;
    pizza.toppings = toppings;
    return pizza;
}
//first pizza
var pizza1 = pizzaO("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(pizza1);
//second pizza
var pizza2 = pizzaO("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);
//personal pizza 1
var pDIY1 = pizzaO("napolitana", "pesto", "felloni", ["funghi", "pollo", "tomatoCherries"]);
console.log(pDIY1);
//personal pizza 2
var pDIY2 = pizzaO("romana", "traditionalRedSauce", "Parmegiano", ["basel", "smokedMeat", "tomatoCherries"]);
console.log(pDIY2);



