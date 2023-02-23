const axios = require('axios');

let url = "https://pokeapi.co/api/v2/pokemon/ditto";

// This is the second configuration option
const res = await axios({
    method: 'get',
    url: url
});

console.log(res)