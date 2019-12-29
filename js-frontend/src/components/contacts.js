class Contacts{
    constructor(){
        this.contacts = []
        this.adapter = new ContactsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadContacts()
    }

    initBindingsAndEventListeners(){
        this.contactsContainer = document.getElementById('contacts-container')
        this.contactName = document.getElementById('contact-name')
        this.contactPhone = document.getElementById('contact-phone')
        this.contactEmail = document.getElementById('contact-email')
        this.newContactName = document.getElementById('new-contact-name')
        this.newContactPhone = document.getElementById('new-contact-phone')
        this.newContactEmail = document.getElementById('new-contact-email')
        this.contactForm = document.getElementById('new-contact-form')
        this.contactForm.addEventListener('submit', this.createContact.bind(this))
        this.contactsContainer.addEventListener('dblclick', this.handleDoubleClick.bind(this))
        this.contactsContainer.addEventListener('keyup', this.updateContact.bind(this))
        this.contactsContainer.addEventListener('click', this.handleDeleteContact.bind(this))        
    }

    createContact(e) {
        e.preventDefault()
        const contactName = this.newContactName.value
        const contactPhone = this.newContactPhone.value
        const contactEmail = this.newContactEmail.value
        if (contactName !== ''){
        this.adapter.createContact(contactName, contactPhone, contactEmail)
            .then(contact => {
                this.contacts.push(new Contact(contact))
                this.contacts.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0)
                this.newContactEmail.value = '',
                this.newContactPhone.value = '',
                this.newContactName.value = ''
        })
        .then( () => {
            this.render()
        })}
        else {
            this.errorsContainer = document.getElementById('error-messages')
            this.errorsContainer.innerHTML = `<div class="alert">
            <span class="closebtn">&times;</span>  
            <strong>Oops!</strong> Sorry, you need a name to create a contact
            </div>`
            var close = document.getElementsByClassName("closebtn");
                var i;

            for (i = 0; i < close.length; i++) {
            close[i].onclick = function(){
            var div = this.parentElement;
            div.style.opacity = "0";
            setTimeout(function(){ div.style.display = "none"; }, 600);
                }
                }
        }
        
    }

    handleDoubleClick(e){
        const editTarget = e.target
        editTarget.focus()
        editTarget.contentEditable = true
    }

    updateContact(e){
        e.preventDefault()
        const cont = e.target.parentElement
        const children = cont.children
        const contid = cont.parentElement.dataset.id
        if (e.keyCode === 13) {
            cont.contentEditable = false
            const contact = this.contacts.find(c => c.id == e.target.dataset.id)
            const nm = contact.name
            const ph = children[1].innerText
            const em = children[3].innerText
            cont.contentEditable = false
            const contactid = e.target.dataset.id
            this.adapter.updateContact(nm,ph,em, contactid)
        }
    }

    handleDeleteContact(e){
        const deleteBtn = e.target
        if(e.target.innerText === "Delete")
        {
            e.preventDefault()
            const deleteBtnId = e.target.dataset.id
            const contact = this.contacts.find(c => c.id == e.target.dataset.id)
            const contactIndex = this.contacts.indexOf(contact)
            this.adapter.deleteContact(contact, contact.id)
            .then(contact => {
                this.contacts.splice(contactIndex, 1);
                })
                 .then(() => {this.render()})
        }
        
    }
    

    fetchAndLoadContacts(){
        this.adapter
            .getContacts()
            .then(contacts => {
                contacts.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0).forEach(contact => this.contacts.push(new Contact(contact)))
        })
        .then( () => {
            this.render()
        })
    }

    

    render(){
        this.contactsContainer.innerHTML = this.contacts.map(contact => contact.renderLi()).join('')
        var coll = document.getElementsByClassName("collapsible")
        var i
        //make it collapse
        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("active")
            var content = this.nextElementSibling
           if (content.style.display === "block") {
              content.style.display = "none"
            } else {
              content.style.display = "block"
            }
          })
        } //collapsible end 
       
    }
}