const originalPrice = 0;
const discount = 0;

function calculatePriceWhitDiscount(originalPrice, discount) {
    
    const discountPercentage = 100-discount;

    const priceWhitDiscount = (originalPrice * discountPercentage)/100;
    
    return priceWhitDiscount;
}





// console.log({
//     originalPrice,
//     discount,
//     discountPercentage,
//     priceWhitDiscount

// });