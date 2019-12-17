class ContactsAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/api/v1/contacts'
    }

    getContacts(){
        return fetch(this.baseUrl).then(res => res.json())
    }

    createContact(name, phone, email){
        const contact = {
            name: name,
            phone: phone,
            email: email
        }

        return fetch(this.baseUrl,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({contact})
        })
        .then(res => res.json())
    }
}