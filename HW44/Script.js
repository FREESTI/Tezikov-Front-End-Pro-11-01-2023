let orders = JSON.parse(localStorage.getItem("orders")) || [];

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
  const product = document.querySelector("#product").value;

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
  if (product === "product1") {
    pricePerUnit = 100;
  } else if (product === "product2") {
    pricePerUnit = 200;
  } else {
    pricePerUnit = 300;
  }
  const totalCost = pricePerUnit * quantity;

  const order = {
    name,
    city,
    shippingAddress,
    paymentMethod,
    product,
    quantity,
    totalCost,
  };
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  orderSummary.innerHTML = `<p>Name: ${name}</p> <p>City: ${city}</p> <p>Shipping Address: ${shippingAddress}</p> <p>Payment Method: ${paymentMethod}</p> <p>Product: ${product}</p> <p>Quantity: ${quantity}</p> <p>Total Cost: $${totalCost}</p>`;

  orderForm.classList.add("hidden");
  orderSummary.classList.remove("hidden");
});
const ordersList = document.getElementById("orders-list");

function showOrderDetails(order, parent) {
  const existingUL = parent.getElementsByTagName("ul")[0];

  if (existingUL) {
    parent.removeChild(existingUL);
    const closeButton = parent.querySelector(".close-btn");
    if (closeButton) {
      closeButton.remove();
    }
    return;
  }


  const ul = document.createElement("ul");
  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const details = {
    Time: time,
    Name: order.name,
    Product: order.product,
    Quantity: order.quantity,
    ShippingAddress: order.shippingAddress,
    PaymentMethod: order.paymentMethod,
    City: order.city,
  };
  for (const key in details) {
    const li = document.createElement("li");
    li.innerText = `${key}: ${details[key]}`;
    ul.appendChild(li);
  }

  parent.appendChild(ul);
}

function removeOrder(index) {
  orders.splice(index, 1);
  showOrders();
}

function showOrders() {
  ordersList.innerHTML = "";

  orders.forEach((order, index) => {
    const div = document.createElement("div");
    div.innerText = `Name: ${order.name} - Product: ${order.product} - Quantity: ${order.quantity}`;

    const detailsButton = document.createElement("button");
    detailsButton.innerText = "Details";
    detailsButton.addEventListener("click", () => showOrderDetails(order, div));
    div.appendChild(detailsButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Удалить заказ";
    deleteButton.addEventListener("click", () => removeOrder(index));
    div.appendChild(deleteButton);

    ordersList.appendChild(div);
  });
}



const showOrdersButton = document.getElementById("show-orders");
showOrdersButton.addEventListener("click", showOrders);
