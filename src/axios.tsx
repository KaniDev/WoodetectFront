import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    },
});

const baseUrl = "http://82.64.198.124:8080";

export { baseUrl, instance };