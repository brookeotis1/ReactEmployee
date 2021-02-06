import axios from "axios";

export default {
    getEmployees: function(){
        return axios.get("https://randomuser.me/api/?results=15");
    }
};

//cant decide if it wants to give me a cors error or not- so here is the other code I had in case it does. 
//return axios.get("https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=15");
