async function fetchData() {
    const response = await fetch('https://localhost:7188/api/Pet');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;

    
}
const items=document.getElementById("pet-list");

fetchData().then(data => {
    data.forEach(pet => {
        const listItem = document.createElement("li");
        const iditem=document.createElement("span");
        iditem.textContent = `ID: ${pet.id} - `;
        listItem.textContent = pet.name;
        listItem.prepend(iditem);
        items.appendChild(listItem);
    });
}).catch(error => {
    console.error('Error fetching data:', error);
});

