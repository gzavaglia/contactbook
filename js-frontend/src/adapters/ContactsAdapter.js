class ContactsAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/api/v1/users'
    }

    //add user_id
    getContacts(user_id){
        return fetch(`${this.baseUrl}/${user_id}/contacts`).then(res => res.json())
    }
    //add user
    async createContact(name, phone, email, user_id){
        const contact = {
            name: name,
            phone: phone,
            email: email,
            user_id: user_id
        }

        const res = await fetch(`${this.baseUrl}/${user_id}/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ contact })
        })
        if(res.ok === false){
            throw new Error('Contact was not created. Check the info and try again')
        }
        return await res.json()
    }

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


 async deleteContact(contact){

    const res = await fetch(`${this.baseUrl}/${contact.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ contact_id: contact.id })
    })
    return await res.json()
 }
    //DELETE END


    async checkStatus(res){
        if (res.status <200 || res.status > 299){
            const msg = await res.json()
            let errorMsg = msg.errors.detail.detail
            if(!errorMsg){
                errorMsg = msg.error
            }
            throw new Error(errorMsg)
        }
    }
}


