async function AddPet(type, name){
   const response = await fetch("https://localhost:7188/api/Pet", {
       method: "POST",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify({ type, name })
   });
   //console.log(`Added pet: ${type} - ${name}`);
   return response.json();
}

document.forms["petForm"].addEventListener("submit", async (event) => {
    event.preventDefault();
    const type = event.target.type.value;
    const name = event.target.name.value;
    //await AddPet(type, name);
    console.log(`Added pet: ${type} - ${name}`);
    AddPet(type, name);
    event.target.type.value = "";
    event.target.name.value = "";
});
 