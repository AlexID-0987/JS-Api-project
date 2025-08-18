const apiUrl = 'https://localhost:7188/api/Pet';
const params = new URLSearchParams(window.location.search);
const petId = params.get('id');

async function fetchData(id) {
    const response = await fetch(`${apiUrl}/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    document.getElementById("id").value = data.id;
    document.getElementById("type").value = data.type;
    document.getElementById("name").value = data.name;
    return data;
    
    
}
fetchData(petId).then(data => {
    console.log(`Fetched data for pet with ID: ${petId}`, data);
});

document.forms["edit-pet-form"].addEventListener("submit", async (event) => {
    event.preventDefault();
    const pet = {
        id: document.getElementById("id").value,
        type: document.getElementById("type").value,
        name: document.getElementById("name").value
    };
    try {
        const updatedPet = await updatePet(pet.id, pet);
        console.log(`Updated pet with ID: ${pet.id}`, updatedPet);
        window.location.href = "../../../Index.html";
    } catch (error) {
        console.error('Error updating pet:', error);
    }
});

async function updatePet(id, pet) {

    const response = await fetch(`${apiUrl}/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}
