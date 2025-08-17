async function AddPet(type, name){

}

document.forms["petForm"].addEventListener("submit", async (event) => {
    event.preventDefault();
    const type = event.target.type.value;
    const name = event.target.name.value;
    await AddPet(type, name);
    //console.log(`Added pet: ${type} - ${name}`);
});
 