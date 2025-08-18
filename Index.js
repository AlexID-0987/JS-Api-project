async function fetchData() {
    const response = await fetch('https://localhost:7188/api/Pet');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;

    
}
const items=document.getElementById("pet-table-body");

fetchData().then(data => {
    data.forEach(pet => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        const nameCell = document.createElement("td");
        const typeCell = document.createElement("td");
        const editCell = document.createElement("td");
        idCell.textContent = pet.id;
        nameCell.textContent = pet.name;
        typeCell.textContent = pet.type;

        const editButton = document.createElement("td");
        editButton.textContent = "Edit";
        editButton.innerHTML=`<a href="common/update/html/update.html?id=${pet.id}">|Edit|</a>`;
        editCell.appendChild(editButton);
        const deleteButton = document.createElement("td");
        deleteButton.innerHTML=`<a href="common/delete/delete.html?id=${pet.id}">|Delete|</a>`;
        editCell.appendChild(deleteButton);

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(typeCell);
        row.appendChild(editCell);

        items.appendChild(row);
    });
}).catch(error => {
    console.error('Error fetching data:', error);
});



