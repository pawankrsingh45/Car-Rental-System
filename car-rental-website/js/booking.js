document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
        const carModel = sessionStorage.getItem("carModel");
        const price = parseFloat(sessionStorage.getItem("price").replace(/[^0-9.]/g, ''));

        document.getElementById("carModel").value = carModel;

        bookingForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const rentDays = parseInt(document.getElementById("rentDays").value);

            // Calculate total price
            const totalPrice = rentDays * price;

            // Store bill information
            sessionStorage.setItem("rentDays", rentDays);
            sessionStorage.setItem("totalPrice", totalPrice);

            window.location.href = "bill.html";
        });
    }
});
