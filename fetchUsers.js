const axios = require('axios');

const usersIds = [1, 2, 3]; // Assuming you want to fetch data for users with IDs 1, 2, and 3

Promise.all(usersIds.map(id => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)))
  .then(responses => {
    const users = responses.map(response => response.data);
    console.log(users); // Here, you would process and display user data
  })
  .catch(error => console.error(error));
