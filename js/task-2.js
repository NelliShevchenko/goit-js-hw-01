function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
return `Shipping to ${country} will cost ${totalPrice} credits`;
}
console.log(getShippingMessage("USA", 100, 20)); // "Shipping to USA will cost 120 credits"
console.log(getShippingMessage("Canada", 200, 30)); // "Shipping to Canada will cost 230 credits"
console.log(getShippingMessage("UK", 150, 25)); // "Shipping to UK will cost 175 credits"

