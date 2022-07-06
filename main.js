const { default: axios } = require('axios');

axios = require('axios');

function getJSONAPI(){
    return new Promise(resolve => {
        axios.get('http://jsonplaceholder.typicode.com/post/1')
        .then(function(json){
            resolve(json.data);
        })
    })
}

getJSONAPI().then(result => {console.log(result)})