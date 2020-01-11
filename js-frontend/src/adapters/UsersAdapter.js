class UsersAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/api/v1/users'
    }
    
    
    getUsers(){
        return fetch(`${this.baseUrl}`).then(res => res.json())
    }

    

}//end of class