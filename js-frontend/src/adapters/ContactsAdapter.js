class ContactsAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/api/v1/contacts'
    }

    getContacts(){
        return fetch(this.baseUrl).then(res => res.json())
    }

    async createContact(name, phone, email){
        const contact = {
            name: name,
            phone: phone,
            email: email
        }

        const res = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ contact })
        })
        return await res.json()
    }

    async updateContact(value){
        // const contact = {
        //     name: value,
        //     phone: value,
        //     email: value
        // }

        // const res = await fetch(`${this.baseUrl}/id`, {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ contact })
        // })
        // return await res.json()
    }
}