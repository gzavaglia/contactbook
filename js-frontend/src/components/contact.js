class Contact {
    constructor(contactJSON){
        this.id = contactJSON.id
        this.name = contactJSON.name
        this.phone = contactJSON.phone
        this.email = contactJSON.email
    }

    renderLi(){
        return `<button type="button" class="collapsible">${this.name}</button>
                <div class="contactinfo">
                    <p>Phone: ${this.phone}</p>
                    <p>Email: ${this.email}</p>
                </div>`
    }


}