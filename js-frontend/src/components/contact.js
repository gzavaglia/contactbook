class Contact {
    constructor(contactJSON){
        this.id = contactJSON.id
        this.name = contactJSON.name
        this.phone = contactJSON.phone
        this.email = contactJSON.email
    }

    renderLi(){
        return `<button type="button" class="collapsible" id="contact-name" data-id="${this.id}">${this.name}</button>
        <div class="contactinfo">
            <p>Phone: </p> 
            <p data-id="${this.id}" id="contact-phone">${this.phone}</p>
            <p>Email: </p> 
            <p data-id="${this.id}" id="contact-email">${this.email}</p>
            <button type="button" class="delete" id="delete-btn" data-id=${this.id}>Delete</button>
        </div>
            
        `
    }

//`<button type="button" class="collapsible" data-id=${this.id}>${this.name}</button>
//<div class="contactinfo">
//<p>Phone: </p> 
//<p data-id=${this.id}>${this.phone}</p>
//<p>Email: </p> 
//<p data-id=${this.id}>${this.email}</p>
//</div>`


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