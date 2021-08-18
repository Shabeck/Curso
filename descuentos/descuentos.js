function calculatePriceWhitDiscount(originalPrice, discount) {
    
    const discountPercentage = 100-discount;

    const priceWhitDiscount = (originalPrice * discountPercentage)/100;
    
    return priceWhitDiscount;
}


function buttonPriceDiscount() {

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const result = calculatePriceWhitDiscount(priceValue,discountValue);

    //Escribimos en HTML 
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + result;

    
}