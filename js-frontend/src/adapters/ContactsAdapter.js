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

    // async updateContact(params, contactid){
    //     const {name, phone, email} = params
    //     const body = {name, phone, email}

    //     const res = await fetch(`${this.baseUrl}/${contactid}`, {
    //         method: 'PATCH',
    //         headers: this.headers,
    //         body: JSON.stringify(body)
    //     })
    //     return await res.json()
    // }

    async updateContact(name, phone, email, id){
        const contact = {
            name: name,
            phone: phone,
            email: email
        }

        const res = await fetch(`${this.baseUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ contact })
        })
        return await res.json()
    }

    //DELETE
    deleteContact(id){

    const deleteOptionsObj = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(id)
    }

    fetch (this.baseUrl + `/${id}`, deleteOptionsObj)
    .then(resp => resp.json())
    .then(deletedContact => {
        deleteContactAction(id)
    })
    .catch(e => console.log(e))

    function deleteContactAction(contact)
    {
        contact.remove()
        console.log("Contact was removed successfully")
    }
}
    //DELETE END

    
}