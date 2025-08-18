const params = new URLSearchParams(window.location.search);
const petId = params.get("id");
document.getElementById("id").value = petId;
  
async function deletePet(id) {
    const response = await fetch(`https://localhost:7188/api/Pet/${id}`, {
        method: "DELETE",
        headers:{'Content-Type': 'application/json'},
        
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data =  response;
    console.log(`Deleted pet with ID: ${id}`);
    return data;
}
document.getElementById("delete-pet-form").addEventListener("submit", (event) => {
    event.preventDefault();
    deletePet(petId).then(() => {
        window.location.href = "../../../MyProjectApi/Index.html";
        console.log(`Deleted pet with ID: ${petId}`);
    }).catch(error => {
        console.error('Error deleting pet:', error);
    });
});