const base_url = "http://127.0.0.1:8080/reviews/";

const API = {
    ApiCall(endpoint) {
        console.log("Fetching data from: " + base_url + endpoint);
        return fetch(base_url + endpoint).then(resp => resp.text()).then(str => JSON.parse(str));
    }
};

export default API;