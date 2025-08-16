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

document.getElementById("refresh-button").addEventListener("click", event => {
    fetch(`https://localhost:7188/api/Pet`,{method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ type:"Dog", name:"New Pet"})})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});