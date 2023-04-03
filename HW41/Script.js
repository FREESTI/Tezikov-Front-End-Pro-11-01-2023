const buyButton = document.querySelector(".buy-button");
const orderForm = document.querySelector(".order-form");
const orderSummary = document.querySelector(".order-summary");
const orderFormSubmit = document.querySelector("#order-form");

buyButton.addEventListener("click", () => {
  orderForm.classList.remove("hidden");
});

orderFormSubmit.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const city = document.querySelector("#city").value;
  const shippingAddress = document.querySelector("#shipping-address").value;
  const paymentMethod = document.querySelector("#payment-method").value;
  const quantity = parseInt(document.querySelector("#quantity").value);

  if (
    !name ||
    !city ||
    !shippingAddress ||
    !paymentMethod ||
    isNaN(quantity) ||
    quantity <= 0
  ) {
    alert("Please fill out all required fields and enter a valid quantity");
    return;
  }

  let pricePerUnit;
  if (paymentMethod === "credit-card") {
    pricePerUnit = 10;
  } else if (paymentMethod === "paypal") {
    pricePerUnit = 12;
  } else {
    pricePerUnit = 15;
  }
  const totalCost = pricePerUnit * quantity;

  orderSummary.innerHTML = `<p>Name: ${name}</p> <p>City: ${city}</p> <p>Shipping Address: ${shippingAddress}</p> <p>Payment Method: ${paymentMethod}</p> <p>Quantity: ${quantity}</p> <p>Total Cost: $${totalCost}</p>`;

  orderForm.classList.add("hidden");
  orderSummary.classList.remove("hidden");
});
