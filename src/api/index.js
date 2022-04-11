const Api = {
    getAdvice: () => {
        return fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => data)
            .catch(error => console.log(error));
    }
}

export default Api;