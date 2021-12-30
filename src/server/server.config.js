const axios = require('axios').default;

export default axios.create({
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*",
    },
    baseURL: "http://localhost:3000/api",
    withCredentials: true
});