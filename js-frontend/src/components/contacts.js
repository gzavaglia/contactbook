class Contacts{
    constructor(){
        this.contacts = []
        this.adapter = new ContactsAdapter()
        //this.bindEventListeners()
        this.fetchAndLoadWires()
    }

    fetchAndLoadWires(){
        this.adapter
            .getContacts()
            .then(contacts => {
                //return console.log(wires)
                contacts.forEach(contact => this.contacts.push(new Contact(contact)))
        })
        .then( () => {
            this.render()
        })
    }

    render(){
        //console.log('rendering.....')
        const contactsContainer = document.getElementById('contacts-container')
        contactsContainer.innerHTML = 'them peeps dawg'
        console.log('my peeps dawg', this.contacts)
    }
}