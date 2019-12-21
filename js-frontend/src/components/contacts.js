class Contacts{
    constructor(){
        this.contacts = []
        this.adapter = new ContactsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadContacts()
    }

    initBindingsAndEventListeners(){
        this.contactsContainer = document.getElementById('contacts-container')
        this.newContactName = document.getElementById('new-contact-name')
        this.newContactPhone = document.getElementById('new-contact-phone')
        this.newContactEmail = document.getElementById('new-contact-email')
        this.contactForm = document.getElementById('new-contact-form')
        this.contactForm.addEventListener('submit', this.createContact.bind(this))
        this.contactsContainer.addEventListener('dblclick', this.handleDoubleClick.bind(this))
        this.contactsContainer.addEventListener('blur', this.updateContact.bind(this), true)
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

    handleDoubleClick(e){
        //console.log(e.target)
        const editTarget = e.target
        editTarget.focus()
        editTarget.contentEditable = true
    }

    updateContact(e){
        const updateTarget = e.target
        updateTarget.contentEditable = false
        const newInfo = updateTarget.innerHTML
        const id = updateTarget.dataset.id
        //we need our adapter to make a patch request
        this.adapter.updateContact(newInfo, id)
    }
    

    fetchAndLoadContacts(){
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
        var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
           if (content.style.display === "block") {
              content.style.display = "none";
            } else {
              content.style.display = "block";
            }
          });
        }
    }
}