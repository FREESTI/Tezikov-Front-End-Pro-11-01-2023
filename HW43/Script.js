const categories = {
  electronics: [
    {
      name: "Ноутбук",
      description: "Міцний та потужний ноутбук",
      price: 15000,
    },
    {
      name: "Смартфон",
      description: "Інноваційний смартфон зі знижкою",
      price: 8000,
    },
    {
      name: "Телевізор",
      description: "Великий телевізор з чудовим зображенням",
      price: 25000,
    },
  ],
  books: [
    {
      name: "Війна і мир",
      description: "Відомий роман Льва Толстого",
      price: 500,
    },
    {
      name: "Шерлок Холмс",
      description: "Класична серія детективних романів",
      price: 200,
    },
    {
      name: "Програмування на JavaScript",
      description: "Книга з поясненнями та прикладами",
      price: 800,
    },
  ],
  clothing: [
    {
      name: "Футболка",
      description: "Зручна футболка для повсякденного носіння",
      price: 500,
    },
    {
      name: "Джинси",
      description: "Класичні джинси зі зручним кроєм",
      price: 1000,
    },
    {
      name: "Кофта",
      description: "Тепла кофта для прохолодної погоди",
      price: 800,
    },
  ],
};

const categoryList = document.querySelector(".categories ul");
const productList = document.querySelector(".products ul");
const productInfo = document.querySelector(".product-info");

for (const category in categories) {
  const categoryLink = categoryList.querySelector(
    `[data-category=${category}]`
  );
  categoryLink.addEventListener("click", () => {
    productList.innerHTML = "";

    categories[category].forEach((product) => {
      const productItem = document.createElement("li");
      const productName = document.createElement("h3");
      const productDescription = document.createElement("p");
      const productPrice = document.createElement("p");
      const productButton = document.createElement("button");

      productName.textContent = product.name;
      productDescription.textContent = product.description;
      productPrice.textContent = `Ціна: ${product.price} грн`;
      productButton.textContent = "Детальніше";

      productButton.addEventListener("click", () => {
        productInfo.querySelector("h2").textContent = product.name;
        productInfo.querySelector("p").textContent = product.description;
        productInfo
          .querySelector(".buy-button")
          .addEventListener("click", () => {
            alert(`Товар ${product.name} куплено!`);
            productInfo.querySelector("h2").textContent =
              "Інформація про товар";
            productInfo.querySelector("p").textContent = "";
          });
      });

      productItem.appendChild(productName);
      productItem.appendChild(productDescription);
      productItem.appendChild(productPrice);
      productItem.appendChild(productButton);

      productList.appendChild(productItem);
    });
  });
}
