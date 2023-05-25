
const table = document.createElement('table');
table.style.border = "1px solid black"; 
table.style.padding = "20px"; 
table.style.backgroundColor = "yellow"; 


let number = 1;
for (let i = 0; i < 10; i++) {
  const row = document.createElement('tr');
  for (let j = 0; j < 10; j++) {
    const cell = document.createElement('td');
    const cellText = document.createTextNode(number);
    cell.appendChild(cellText);
    cell.style.border = "1px solid black";
    row.appendChild(cell);
    number++;
  }
  table.appendChild(row);
}

const container = document.createElement('div');
container.style.display = "flex";
container.style.justifyContent = "center";
container.appendChild(table);
document.body.appendChild(container);










