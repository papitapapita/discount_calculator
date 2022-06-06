const priceInput = document.querySelector("#price");
const discountInput = document.querySelector("#discount");
const couponsInput = document.querySelector("#coupon");
const resultText = document.getElementById("result");
const coupons = ["HOUSE", "HORSE", "CAR"];

let result;

function calculateDiscount(){
    const price = parseInt(priceInput.value);
    const couponsValue = couponsInput.value;
    let discount = parseInt(discountInput.value);
    console.log(typeof(coupons));
    if(coupons != undefined && coupons != ""){
        console.log(couponsValue);
        console.log(coupons[0]);
        switch(couponsValue){
            case coupons[0]:
                discount += 25;
                break;
            case coupons[1]:
                discount += 15;
                break;
            case coupons[2]:
                discount += 20;
                break;
            default:
                alert("Not valid coupon");
                break;
        }
    }
    result = (price * (100 - discount))/100;
    resultText.innerText = result;
}

