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
        this.contactsContainer.addEventListener('dblclick', function(){
            console.log('hi click')
        })

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