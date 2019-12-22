class Contact {
    constructor(contactJSON){
        this.id = contactJSON.id
        this.name = contactJSON.name
        this.phone = contactJSON.phone
        this.email = contactJSON.email
    }

    renderLi(){
        
        const deleteBtn = document.createElement("button")
        deleteBtn.className = "delete-contact"
        deleteBtn.setAttribute = ("data-id", this.id)
        deleteBtn.textContent = "Delete"
        deleteBtn.setAttribute = ("id", "delete-btn")
        return `<button type="button" class="collapsible" data-id=${this.id}>${this.name}</button>
                <div class="contactinfo">
                    <p>Phone: ${this.phone}</p>
                    <p>Email: ${this.email}</p>
                </div>
                <div class='delete-contact'>
                    <button type="button" id="delete-btn" data-id=${this.id}>DELETE</button>
                </div>`
    }


    // deleteContact(event)
    // {
    // const contactId = this.id

    // const deleteOptionsObj = {
    //     method: "DELETE",
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     },
    //     body: JSON.stringify({contact: contactId})
    // }

    // fetch (this.base + `/${pokemonId}`, deleteOptionsObj)
    // .then(resp => resp.json())
    // .then(deletedPokemon => {
    //     deletePokemonAction()
    // })
    // .catch(e => console.log(e))
 
    

}