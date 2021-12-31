const axios = require('axios').default;

export default axios.create({
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*",
    },
    baseURL: "https://backend--backendproject.herokuapp.com/api",
    withCredentials: true
});