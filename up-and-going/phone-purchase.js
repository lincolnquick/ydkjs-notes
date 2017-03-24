// Simple exercise in You Don't Know JS: Up and Going, Chapter 1

let bankBalance = Number(prompt(
    'What is your current bank balance? (Enter a number only, e.g. 350.07)'));

const SPENDING_THRESHOLD = 0.8 * bankBalance;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const TAX_RATE = 0.06;

let purchaseAmount = 0.00;

while (purchaseAmount < bankBalance){

    purchaseAmount += PHONE_PRICE;

    if (purchaseAmount < SPENDING_THRESHOLD){
        purchaseAmount += ACCESSORY_PRICE;
    }
}

purchaseAmount += calculateTax(purchaseAmount);

console.log(
    'Your purchase: ' + formatPrice(purchaseAmount)
);

if (purchaseAmount > bankBalance){
    console.log(
        "You can't afford this purchase..."
    );
}

function calculateTax(amount){
    return amount * TAX_RATE;
}

function formatPrice(price){
    return '$' + price.toFixed(2);
}