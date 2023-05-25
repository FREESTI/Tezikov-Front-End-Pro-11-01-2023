// Зберігаємо вибрані товари
let selectedProducts = [];

// Функція для вибору товару
function selectProduct(title, price) {
  const product = {
    title: title,
    price: price
  };
  selectedProducts.push(product);
  return product;
}


// Функція для відображення інформації про замовлені товари
function showSelectedProducts() {
  let total = 0;
  let selectedProductsHTML = '';
  // Проходимо по всіх вибраних товарах і формуємо HTML-код для кожного з них
  for (let i = 0; i < selectedProducts.length; i++) {
    const product = selectedProducts[i];
    total += product.price;
    selectedProductsHTML += `<p>${product.title} - ${product.price}</p>`;
  }
  // Виводимо HTML-код замовлення на сторінці
  const orderInfo = `<h2>Інформація про замовлення</h2> ${selectedProductsHTML}<p><strong>Всього: ${total} грн</strong></p>`;
  const orderForm = document.querySelector('.order-form');
  orderForm.insertAdjacentHTML('beforeend', orderInfo);
}

// Перевірка всіх даних користувача під час підтвердження замовлення
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const cityInput = document.getElementById('city');
  const npWarehouseInput = document.getElementById('nova-poshta-warehouse');
  const paymentMethodInput = document.getElementById('payment-method');
  const quantityInput = document.getElementById('quantity');

  if (nameInput.value.trim() === '' || cityInput.value === '' || npWarehouseInput.value.trim() === '' || paymentMethodInput.value === '' || quantityInput.value.trim() === '') {
    // Якщо хоча б одне з полів не заповнено, виводимо повідомлення про помилку
    alert('Будь ласка, заповніть всі поля форми');
    return;
  }
  
  // Якщо всі поля заповнено, збираємо всі дані користувача
  const name = nameInput.value.trim();
  const city = cityInput.value;
  const npWarehouse = npWarehouseInput.value.trim();
  const paymentMethod = paymentMethodInput.value;
  const quantity = parseInt(quantityInput.value);
  const selectedProduct = selectProduct(productName);
  if (!name || !city || !npWarehouse || !paymentMethod || !quantity || !selectedProduct) {
    alert('Будь ласка, заповніть всі поля форми');
    return;
  }
  const userData = {
    name,
    city,
    npWarehouse,
    paymentMethod,
    quantity,
  };
  userData.product = selectedProduct;
  