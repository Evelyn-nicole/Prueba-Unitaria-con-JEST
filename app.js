const sum = (a,b) => {
    return a + b
}
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    let valueInDollarYen = valueInDollar * 127.9;
    return valueInDollarYen;
}
const fromYenToPound = function(valueInYen) {
    let valueInEnglandPound = valueInYen * 0.8;
    return valueInEnglandPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
