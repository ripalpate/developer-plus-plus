import axios from 'axios';
// import apiKeys from '../apiKeys';

// const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getRequest = () => new Promise((resolve, reject) => {
  axios
    .get('https://api.github.com/users/ripalpate')
    .then((result) => {
      console.log(result.data);
      resolve(result.data);
    })
    .catch(err => reject(err));
});

export default {
  getRequest,
};
