function submitForm() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const city = document.getElementById("city").value;
  const address = document.getElementById("address").value;
  const languages = [];
  document
    .querySelectorAll('input[name="languages[]"]:checked')
    .forEach(function (language) {
      languages.push(language.value);
    });

  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  const row1 = document.createElement("tr");
  const cell11 = document.createElement("td");
  cell11.textContent = "Ім'я:";
  const cell12 = document.createElement("td");
  cell12.textContent = name;
  row1.appendChild(cell11);
  row1.appendChild(cell12);

  const row2 = document.createElement("tr");
  const cell21 = document.createElement("td");
  cell21.textContent = "Прізвище:";
  const cell22 = document.createElement("td");
  cell22.textContent = surname;
  row2.appendChild(cell21);
  row2.appendChild(cell22);

  const row3 = document.createElement("tr");
  const cell31 = document.createElement("td");
  cell31.textContent = "Дата народження:";
  const cell32 = document.createElement("td");
  cell32.textContent = birthdate;
  row3.appendChild(cell31);
  row3.appendChild(cell32);

  const row4 = document.createElement("tr");
  const cell41 = document.createElement("td");
  cell41.textContent = "Стать:";
  const cell42 = document.createElement("td");
  cell42.textContent = gender;
  row4.appendChild(cell41);
  row4.appendChild(cell42);

  const row5 = document.createElement("tr");
  const cell51 = document.createElement("td");
  cell51.textContent = "Місто:";
  const cell52 = document.createElement("td");
  cell52.textContent = city;
  row5.appendChild(cell51);
  row5.appendChild(cell52);

  const row6 = document.createElement("tr");
  const cell61 = document.createElement("td");
  cell61.textContent = "Адреса:";
  const cell62 = document.createElement("td");
  cell62.textContent = address;
  row6.appendChild(cell61);
  row6.appendChild(cell62);

  const row7 = document.createElement("tr");
  const cell71 = document.createElement("td");
  cell71.textContent = "Мови, якими володіє:";
  const cell72 = document.createElement("td");
  cell72.textContent = languages.join(", ");
  row7.appendChild(cell71);
  row7.appendChild(cell72);

  tbody.appendChild(row1);
  tbody.appendChild(row2);
  tbody.appendChild(row3);
  tbody.appendChild(row4);
  tbody.appendChild(row5);
  tbody.appendChild(row6);
  tbody.appendChild(row7);
  table.appendChild(tbody);

  const output = document.getElementById("output");
  output.innerHTML = "";
  output.appendChild(table);
}
