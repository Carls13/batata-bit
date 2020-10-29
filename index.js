const prevIcon = document.querySelector(".main-tables--prev-icon");
const nextIcon = document.querySelector(".main-tables--next-icon");
const currencyContainer = document.querySelector(".main-currency-table");
const commissionContainer = document.querySelector(".main-commission-table");

function handlePrevClick() {
    currencyContainer.classList.toggle("hidden");
    commissionContainer.classList.toggle("hidden")
    prevIcon.classList.toggle("hidden");
    nextIcon.classList.toggle("hidden");
}

function handleNextClick() {
    currencyContainer.classList.toggle("hidden");
    commissionContainer.classList.toggle("hidden");
    prevIcon.classList.toggle("hidden");
    nextIcon.classList.toggle("hidden");
}

prevIcon.addEventListener("click", handlePrevClick);
nextIcon.addEventListener("click", handleNextClick);