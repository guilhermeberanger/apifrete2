const rp = require('request-promise-native')
require('dotenv').config();

const apiFrete = (endPoint, body, method) => {
    const token = process.env.TOKEN
    const url = `https://sandbox.centraldofrete.com/${endPoint}`
    let options = {
        method: method,
        body: body,
        url: url,
        headers: {
            "Authorization": token,
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        json: true
    }
    return rp(options)
}

module.exports = apiFrete