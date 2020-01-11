class User{
    constructor(userJSON){
        this.id = userJSON.id
        this.username = userJSON.username
        //this.contacts = []
        //userJSON.contacts.forEach(c => this.contacts.push(new Contact(c)))
    }

    renderUsername(){
        return `<option data-id="${this.id}" value="${this.id}">${this.username}</option>`
    }

    getId(){
        return this.id
    }

} //end class