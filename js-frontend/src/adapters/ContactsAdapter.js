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
//     deleteContact(contact, id){

//     const deleteOptionsObj = {
//         method: "DELETE",
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify({contact})
//     }

//     fetch (this.baseUrl + `/${id}`, deleteOptionsObj)
//     .then(resp => resp.json())
//     .then(deletedContact => contact.remove())



// }

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
    // deleteContactFromBook(contact, id) {
   
    //     // const trainerCard = this.parentElement.parentElement.parentElement
    //     // const trainerId = trainerCard.getAttribute("data-id")
    //     // const pokemonLi = this.parentElement
    //     // const pokemonId = this.getAttribute("data-pokemon-id")
     
    //     const deleteOptionsObj = {
    //        method: 'DELETE',
    //        headers: {
    //           'Content-Type': 'application/json',
    //           'Accept': 'application/json'
    //        },
    //        body: JSON.stringify({
    //           contact_id: id
    //        })
    //     }
           
    //     return fetch(this.baseUrl + `/${id}`, deleteOptionsObj)
    //        .then(resp => {
    //           if(resp.ok) {
    //              return resp.json()
    //           } else {
    //              throw Error(resp.statusText)
    //           }
    //        })
    //        .then(deletedContact => {
    //           deleteContactActions()
    //        })
    //        .catch(error => console.log(error))
     
    //     function deleteContactActions() {
    //        contact.remove()
    //        console.log("Contact deleted from Trainer Successfully")
    //     }
    //  }
}


