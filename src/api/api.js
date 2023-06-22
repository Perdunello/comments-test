import axios from "axios";

const API = {
    getComments() {
        return axios.get('https://dummyjson.com/comments').then(response => response)
    }
}

export default API