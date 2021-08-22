document.getElementById("memory-8gb").addEventListener("click", function () {
    extraMemory8gb = document.getElementById("ex-Memory-Cost");
    extraMemory8gb.innerText = 00;
    Totalprice()
})
document.getElementById("memory-16gb").addEventListener("click", function () {
    extraMemory16gb = document.getElementById("ex-Memory-Cost");
    extraMemory16gb.innerText = 180;
    Totalprice()
})
document.getElementById("ssd-256-storage-button").addEventListener("click", function () {
    extraStorage256GB = document.getElementById("ex-storage-Cost");
    extraStorage256GB.innerText = 00;
    Totalprice()
})
document.getElementById("ssd-512-storage-button").addEventListener("click", function () {
    extraStorage512GB = document.getElementById("ex-storage-Cost");
    extraStorage512GB.innerText = 100;
    Totalprice()
})
document.getElementById("ssd-1Tb-storage-button").addEventListener("click", function () {
    extraStorage1TB = document.getElementById("ex-storage-Cost");
    extraStorage1TB.innerText = 180;
    Totalprice()
})
document.getElementById("free-delivery-button").addEventListener("click", function () {
    freeDeliveryButton = document.getElementById('delivery-Cost');
    freeDeliveryButton.innerText = 0;
    Totalprice()
})
document.getElementById("cost-delivery-button").addEventListener("click", function () {
    costDeliveryButton = document.getElementById('delivery-Cost');
    costDeliveryButton.innerText = 20;
    Totalprice()
})
// ekhane memory,storage and delivery er innerText niye,sob variable gulu ke Jok kore dichi.Trpr plus result ke total-price er innerText e add kore dichi.Sathe Sathe Footer-total eo plus result innerText e add kore dichi. 
function Totalprice() {
    memory = document.getElementById('ex-Memory-Cost').innerText;
    storage = document.getElementById('ex-storage-Cost').innerText;
    delivery = document.getElementById('delivery-Cost').innerText;
    totalAmount = parseFloat(memory) + parseFloat(storage) + parseFloat(delivery);
    document.getElementById("total-price").innerText = totalAmount + 1299;
    document.getElementById("footer-total").innerText = totalAmount + 1299;
    promoCode()
}
// ekhane promo Code check kore,check true hole total-price ke 20% korchi,trpr abar total-price e 20%-discount minus korchi,trpr innerText e add korchi.
function promoCode() {
    code = document.getElementById('promo-input').value;
    totalPrice = document.getElementById("total-price").innerText;
    document.getElementById("promo-input").value = '';
    if (code == "stevekaku") {
        discount = ((totalPrice * 20) / 100);
        discount = totalPrice - discount;
        document.getElementById("total-price").innerText = discount;
        document.getElementById("footer-total").innerText = discount;
    }
}
