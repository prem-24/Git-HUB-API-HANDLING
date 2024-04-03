



class Github{

    constructor(){
        this.client_id = "ad98f59343eb4e20a52e";
        this.client_secret = "ce8dc3dc360e8eeab85c6be13d32ad34bffe52a6";
    }

    async getUser(user){

        const profileResponse = await 
        fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        
        return {
            profile
        }
        

    }

}