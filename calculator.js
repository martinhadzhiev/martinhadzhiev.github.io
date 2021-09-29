window.onload = function () {
    document.getElementById("usdValue").onkeyup = calculate;
    document.getElementById("carValue").onkeyup = calculate;
    document.getElementById("tax0").onkeyup = calculate;
    document.getElementById("tax1").onkeyup = calculate;
    document.getElementById("taxBg").onkeyup = calculate;
    document.getElementById("taxShipping").onkeyup = calculate;
};

function calculate() {
    let usdValueElement = document.getElementById("usdValue");
    let carValueElement = document.getElementById("carValue");
    let tax0Element = document.getElementById("tax0");
    let tax1Element = document.getElementById("tax1");
    let taxBgElement = document.getElementById("taxBg");
    let taxShippingElement = document.getElementById("taxShipping");

    usdValueElement.value = usdValueElement.value.replace(/[^0-9.]/g, '');
    carValueElement.value = carValueElement.value.replace(/[^0-9.]/g, '');
    tax0Element.value = tax0Element.value.replace(/[^0-9.]/g, '');
    tax1Element.value = tax1Element.value.replace(/[^0-9.]/g, '');
    taxBgElement.value = taxBgElement.value.replace(/[^0-9.]/g, '');
    taxShippingElement.value = taxShippingElement.value.replace(/[^0-9.]/g, '');

    let usdValue = parseFloat(usdValueElement.value);
    let carValue = parseFloat(carValueElement.value);
    let tax0 = parseFloat(tax0Element.value);
    let tax1 = parseFloat(tax1Element.value);
    let taxBg = parseFloat(taxBgElement.value);
    let taxShipping = parseFloat(taxShippingElement.value);

    let carWithMitoTax = carValue + (carValue * (tax0 / 100));
    let carWithDdsTax = carWithMitoTax + (carWithMitoTax * (tax1 / 100));
    let carWithBgTax = carWithDdsTax + taxBg;

    let total = (carWithBgTax * usdValue) + taxShipping;

    if (!isNaN(total))
        document.getElementById("total").value = total.toFixed(2) + ' ЛВ';
    else
        document.getElementById("total").value = 0 + ' ЛВ';
}
