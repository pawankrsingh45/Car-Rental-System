document.addEventListener("DOMContentLoaded", function () {
    const carModel = sessionStorage.getItem("carModel");
    const rentDays = sessionStorage.getItem("rentDays");
    const totalPrice = sessionStorage.getItem("totalPrice");

    document.getElementById("carModelBill").innerText = carModel;
    document.getElementById("daysBill").innerText = rentDays;
    document.getElementById("totalPriceBill").innerText = totalPrice;
});
