class Contacts{
    constructor(){
        this.contacts = []
        this.adapter = new ContactsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadWires()
    }

    initBindingsAndEventListeners(){
        this.contactsContainer = document.getElementById('contacts-container')
        this.newContactName = document.getElementById('new-contact-name')
        this.newContactPhone = document.getElementById('new-contact-phone')
        this.newContactEmail = document.getElementById('new-contact-email')
        this.contactForm = document.getElementById('new-contact-form')
        this.contactForm.addEventListener('submit', this.createContact.bind(this))
    }

    createContact(e) {
        e.preventDefault()
        const contactName = this.newContactName.value
        const contactPhone = this.newContactPhone.value
        const contactEmail = this.newContactEmail.value

        this.adapter.createContact(contactName, contactPhone, contactEmail)
            .then(contact => {
                this.contacts.push(new Contact(contact))
        })
        .then( () => {
            this.render()
        })
        
    }
    

    fetchAndLoadWires(){
        this.adapter
            .getContacts()
            .then(contacts => {
                contacts.forEach(contact => this.contacts.push(new Contact(contact)))
        })
        .then( () => {
            this.render()
        })
    }

    render(){
        this.contactsContainer.innerHTML = this.contacts.map(contact => contact.renderLi()).join('')
    }
}