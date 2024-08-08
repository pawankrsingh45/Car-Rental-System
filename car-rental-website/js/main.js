document.addEventListener("DOMContentLoaded", function () {
    const bookButtons = document.querySelectorAll(".book-car");

    bookButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const carId = this.getAttribute("data-car-id");
            const carModel = this.parentElement.querySelector("h3").innerText;
            const price = this.parentElement.querySelector("p").innerText;

            // Store booking information in session storage
            sessionStorage.setItem("carId", carId);
            sessionStorage.setItem("carModel", carModel);
            sessionStorage.setItem("price", price);

            window.location.href = "booking.html";
        });
    });
});
