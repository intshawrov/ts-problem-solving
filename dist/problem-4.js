"use strict";
// A restaurant ordering app stores each dish in the cart as an object with a name and a price, and needs to calculate the total bill.
Object.defineProperty(exports, "__esModule", { value: true });
const calculateOrderTotal = (items) => {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return total;
};
console.log(calculateOrderTotal([{ name: "Burger", price: 250 }, { name: "Fries", price: 90 }, { name: "Soda", price: 60 }]));
console.log(calculateOrderTotal([{ name: "Pizza", price: 500 }]));
console.log(calculateOrderTotal([]));
//# sourceMappingURL=problem-4.js.map