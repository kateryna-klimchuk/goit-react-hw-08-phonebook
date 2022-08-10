import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// const URL = 'https://connections-api.herokuapp.com';

const signUpUser = async () => {
  await axios
    .post('/users/signup', {
      name: 'qwer',
      email: 'qwer@com',
      password: 'qwer123',
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log(response);
  return response;
};

signUpUser();
