import axios from 'axios'
const getData = (url) => {
    return axios.get(url)
}

const postData = (url, params) => {
    return axios.post(url, params)
}

export {getData, postData}