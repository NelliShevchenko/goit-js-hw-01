function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
console.log(makeTransaction(5, 1000)); // "You ordered 5 droids worth 5000 credits!"
console.log(makeTransaction(3, 1500)); // "You ordered 3 droids worth 4500 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

