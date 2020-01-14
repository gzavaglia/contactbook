class Contact {
    constructor(contactJSON){
        this.id = contactJSON.id
        this.name = contactJSON.name
        this.phone = contactJSON.phone
        this.email = contactJSON.email
        this.userId = contactJSON.user_id
    }

    renderLi(){
        

        return `<button type="button" class="collapsible" id="contact-name" data-id="${this.id}">${this.name}</button>
        <div class="contactinfo">
            <p>Phone: </p> 
            <p data-id="${this.id}" id="contact-phone">${this.phone}</p>
            <p>Email: </p> 
            <p data-id="${this.id}" id="contact-email">${this.email}</p>
            <i class="fa fa-star" aria-hidden="true" id="fave" style="font-size:36px"></i>
            <button type="button" class="delete" id="delete-btn" data-id=${this.id}>Delete</button>
        </div>
            
        `
        
    }    
}