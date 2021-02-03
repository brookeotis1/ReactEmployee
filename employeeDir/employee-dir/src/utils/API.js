import axios from "axios";

export default {
    getEmployees: function(){
        return axios.get("https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=15");
    }
};



