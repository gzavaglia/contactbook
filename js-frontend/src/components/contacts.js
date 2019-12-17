class Contacts{
    constructor(){
        this.contacts = []
        this.adapter = new ContactsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadWires()
    }

    initBindingsAndEventListeners()
    

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
        //console.log('rendering.....')
        const contactsArray = this.contacts.map(con => `<li>${con.name}</li>`)
        const contactsString = contactsArray.join('')
        const contactsContainer = document.getElementById('contacts-container')
        contactsContainer.innerHTML = contactsString
    }
}