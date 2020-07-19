import Axios from 'axios';

const getClient = (baseUrl = null) => {
    let options = {
        baseURL: baseUrl,
        headers: {
            'Accept': 'application/json',
			'Content-Type': 'application/json; charset=utf-8'
        }
    };

    const client = Axios.create(options);
};

class ApiClient {
    constructor(baseUrl = null) {
        this.client = getClient(baseUrl);
    }

    // API client GET request
    get(url, config = {}) {
        return this.client.get(url, config)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }

    // API client POST request
    post(url, data = {}, config = {}) {
		return this.client.post(url, data, config)
			.then(response => Promise.resolve(response))
			.catch(error => Promise.reject(error));
	}
};

export default ApiClient;