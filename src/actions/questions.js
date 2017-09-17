import axios from 'axios';
//receives a random question
export function fetchQuestion() {
    return function () {
        return axios.get('http://jservice.io/api/random')
        .then(response => { console.log(response)});
    }
}